
const { queryItems } = require('../services/posts.services');

module.exports.handler = async (event) => {
  const { id } = JSON.parse(event.body);
  const TableName = process.env.TABLE_NAME;
  const data = await queryItems({
    TableName,
    KeyConditionExpression: 'id = :id',
    ExpressionAttributeValues: {
      ':id': { S: id }
    }
  });
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!',
        data,
      },
      null,
      2
    ),
  };
};
