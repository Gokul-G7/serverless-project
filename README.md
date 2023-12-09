<!--
title: 'AWS NodeJS Example'
description: 'This template demonstrates how to deploy a NodeJS function running on AWS Lambda using the traditional Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->


# Serverless Framework AWS-NodeJS example demonstrating CRUD operations in DynamoDB and the management of an S3 Bucket using JavaScript (JS) v3

This repository features a serverless application that establishes connections with Amazon DynamoDB and S3 buckets through its individual handler functions. The emphasis of this project is on simplicity, making it an ideal resource for learning the basics of the **AWS SDK for JavaScript v3**.

The serverless architecture ensures efficient resource utilization, and the handler functions serve as the backbone, orchestrating interactions with both DynamoDB for data storage and S3 buckets for file handling. The codebase is intentionally kept straightforward to facilitate a smooth learning experience, providing insights into the usage of the AWS SDK for JavaScript v3. By exploring this project, developers can gain a foundational understanding of serverless concepts and AWS SDK integration.


### Invocation

After successful deployment, you can invoke the deployed function by using the following command:

```bash
serverless invoke --function hello
```

Which should result in response similar to the following:

```json
{
    "statusCode": 200,
    "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": {}\n}"
}
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello
```

Which should result in response similar to the following:

```
{
    "statusCode": 200,
    "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}

```
Or you can use the serverless offline library to run  the whole application intead of invoking a single function. install it using the command given below and add that in the plugin of the serverlss.yml file.

```bash
npm i serverless-offline
```
