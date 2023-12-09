const { s3Client } = require('../resourceClients');
const { parse } = require('lambda-multipart-parser');
const {
    PutObjectCommand,
    DeleteObjectCommand,
    GetObjectCommand
} = require('@aws-sdk/client-s3');

const BUCKET_NAME = process.env.BUCKET_NAME;
const uploadFile = async (event, context) => {
    try {
        console.log(BUCKET_NAME)
        const { files } = await parse(event);
        const params = {
            Bucket: BUCKET_NAME,
            Key: files[0].filename,
            Body: files[0].content
        }
        console.log(files)
        const response = await s3Client.send(new PutObjectCommand(params))
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Successfully uploaded!" },
                null,
                2)
        }
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: error },
                null,
                2)
        }
    }

}
const removeFile = async (event, context) => {
    try {
        const { filename } = JSON.parse(event.body);
        console.log(BUCKET_NAME, filename)
        const params = {
            Bucket: BUCKET_NAME,
            Key: filename
        };
        const response = await s3Client.send(new DeleteObjectCommand(params));
        console.log("RES::", response);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Successfully Deleted!" },
                null,
                2
            )
        }
    } catch (error) {
        console.log("Error:::", error)
        return {
            statusCode: 400,
            body: JSON.stringify({ message: error },
                null,
                2)
        }
    }
}

const displayContent = async (event, context) => {
    try {
        const { filename } = JSON.parse(event.body);
        const params = {
            Bucket: BUCKET_NAME,
            Key: filename
        }
        const response = await s3Client.send(new GetObjectCommand(params));;
        const fileContent = await response.Body.transformToString();
        return {
            statusCode: 200,
            body: fileContent,
            headers: {
                "Content-Type": response.ContentType
            },
        }
    } catch (error) {
        console.log("ERR:::", error);
        return {
            statusCode: 400,
            body: JSON.stringify(error, null,
                2)
        }
    }
}

module.exports = {
    uploadFile,
    removeFile,
    displayContent
}