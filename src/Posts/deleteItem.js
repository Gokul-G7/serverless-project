const { deleteItem } = require('../services/posts.services')
module.exports.handler = async (event) => {
    const { id } = JSON.parse(event.body)
    const TableName = process.env.TABLE_NAME;
    await deleteItem({
        TableName,
        Key: {
            id: { S: id }
        }
    })
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                functName: 'DeleteItem',
                message: 'Go Serverless v3.0! Your function executed successfully!',
            },
            null,
            2
        ),
    };
};