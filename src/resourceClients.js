const { S3Client, ListBucketsCommand } = require("@aws-sdk/client-s3");
const { DynamoDBClient, ListBackupsCommand } = require("@aws-sdk/client-dynamodb");

const ddbClient = new DynamoDBClient({region:'eu-west-1'});
const s3Client = new S3Client({region:'eu-west-1'});

module.exports = {
    ddbClient,
    s3Clinet
}