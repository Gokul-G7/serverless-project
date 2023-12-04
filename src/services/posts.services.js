const { ddbClient } = require('../resourceClients');
const {
    PutItemCommand,
    GetItemCommand,
    DeleteItemCommand,
    QueryCommand,
    ScanCommand
} = require('@aws-sdk/client-dynamodb');

const queryItems = async (params) => {
    try {
        const data = await ddbClient.send(new QueryCommand(params));
        console.log(data)
        return data;
    } catch (error) {
        console.error(error);
    }
}


const getAllItems = async (params) => {
    try {
        const data = await ddbClient.send(new ScanCommand(params));
        console.log(data);
        return data
    } catch (error) {
        console.error(error)
    }
}

const getItemById = async (params) => {
    try {
        const data = await ddbClient.send(new GetItemCommand(params));
        console.log(data);
        return data
    } catch (error) {
        console.error(error)
    }
}

const putItem = async (params) => {
    try {
        const data = await ddbClient.send(new PutItemCommand(params));
        return data;
    } catch (error) {
        console.error("Error", error)
    }
}

const deleteItem = async (params) => {
    try {
        const data = await ddbClient.send(new DeleteItemCommand(params));
        return data;
    } catch (error) {
        console.error(error)
    }
}
module.exports = {
    getAllItems,
    queryItems,
    putItem,
    deleteItem,
    getItemById
}