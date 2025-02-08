import { DynamoDBClient, GetItemCommand } from '@aws-sdk/client-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb';

const dynamo = new DynamoDBClient({
  credentials: {
    accessKeyId: Netlify.env.get('FAH_AWS_ACCESS_KEY'),
    secretAccessKey: Netlify.env.get('FAH_AWS_SECRET_KEY'),
  },
  region: Netlify.env.get('FAH_AWS_REGION'),
});

const command = new GetItemCommand({
  TableName: Netlify.env.get('FAH_AWS_DYNAMO_TABLE'),
  Key: { id: { N: '0' } },
});

export default async () => {
  try {
    const data = await dynamo.send(command)

    return Response.json(unmarshall(data.Item));
  } catch (error) {
    console.error(error);

    return new Response(error);
  }
};

export const config = {
  path: '/api/work'
};
