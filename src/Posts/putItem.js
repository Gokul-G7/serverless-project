
const { putItem } = require('../services/posts.services');
const { v4: uuid } = require('uuid');

module.exports.handler = async (event) => {
  const { id, title } = JSON.parse(event.body);

  const TableName = process.env.TABLE_NAME;
  const now = new Date();
  const data = await putItem({
    TableName,
    Item: {
      id: { S: id || uuid() },
      title: { S: title },
      createdAt: { S: now.toISOString() }
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
