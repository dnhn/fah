const mainUrl = 'https://api.foldingathome.org'

export const endpoints = {
  GET_PROJECT: id => `${mainUrl}/project/${id}`,
  GET_TEAM: id => `${mainUrl}/team/${id}`,
  GET_USER_BY_ID: uid => `${mainUrl}/uid/${uid}`,
  GET_USER_BY_USERNAME: usr => `${mainUrl}/user/${usr}`,
  GET_WORK_STATUS: '/.netlify/functions/getWorkStatus',
};
