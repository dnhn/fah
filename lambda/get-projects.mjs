import { headers } from '../src/api/lambda-config.mjs';
import { getProjects } from '../src/api/lambda-requests.mjs';

export default async (_, context) => {
  const { name } = context.params;

  try {
    const data = await (await getProjects(name)).json()

    return new Response(JSON.stringify(data), { headers });
  } catch (error) {
    console.error(error);

    return Response.json(error);
  }
}

export const config = {
  path: '/api/user/:name/projects'
};
