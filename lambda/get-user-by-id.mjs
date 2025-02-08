import { headers } from '../src/api/lambda-config.mjs';
import { getUserById } from '../src/api/lambda-requests.mjs';

export default async (_, context) => {
  const { id } = context.params;

  try {
    const data = await (await getUserById(id)).json()

    return new Response(JSON.stringify(data), { headers });
  } catch (error) {
    console.error(error);

    return Response.json(error);
  }
}

export const config = {
  path: '/api/uid/:id'
};
