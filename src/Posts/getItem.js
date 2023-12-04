const { getAllItems, getItemById } = require('../services/posts.services');

module.exports.handler = async (event) => {
  const { id } = event.httpMethod == 'POST' ? JSON.parse(event.body) : 0;
  const TableName = process.env.TABLE_NAME;
  const data = id ? await getItemById({
    TableName,
    Key: {
      id: { S: id }
    }
  }) : await getAllItems({
    TableName
  });
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        functName: 'GetItem',
        message: 'Go Serverless v3.0! Your function executed successfully!',
        data: id ? data.Item : data.Items
      },
      null,
      2
    ),
  };
};
