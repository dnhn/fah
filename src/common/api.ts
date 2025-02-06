const mainUrl = 'https://api.foldingathome.org'

export const endpoints = {
  GET_PROJECT: (id: number) => `${mainUrl}/project/${id}`,
  GET_TEAM: (id: number) => `${mainUrl}/team/${id}`,
  GET_USER_BY_ID: (id: number) => `${mainUrl}/uid/${id}`,
  GET_USER_BY_USERNAME: (username: string) => `${mainUrl}/user/${username}`,
  GET_WORK_STATUS: '/.netlify/functions/getWorkStatus',
};
