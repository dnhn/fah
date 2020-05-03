const DDB = require('aws-sdk/clients/dynamodb');
const {
  FAH_AWS_REGION,
  FAH_AWS_ACCESS_KEY,
  FAH_AWS_SECRET_KEY,
  FAH_AWS_DYNAMO_TABLE,
} = process.env;
const dynamo = new DDB.DocumentClient({
  region: FAH_AWS_REGION,
  accessKeyId: FAH_AWS_ACCESS_KEY,
  secretAccessKey: FAH_AWS_SECRET_KEY,
});

exports.handler = (event, context, callback) => {
  dynamo.get({
    TableName: FAH_AWS_DYNAMO_TABLE,
    Key: { id: 0 },
  }, (error, data) => {
    if (error) {
      callback(error);
    } else {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(data.Item),
      });
    }
  });
};
