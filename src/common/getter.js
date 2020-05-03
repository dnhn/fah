import fetchP from 'fetch-jsonp';
import { endpoints } from './api';

const fetcher = async url => await (await fetchP(url)).json();

const getProject = project => fetcher(endpoints.GET_PROJECT(project));

const getTeam = team => fetcher(endpoints.GET_TEAM(team));

const getUserById = id => fetcher(endpoints.GET_USER_BY_ID(id));

const getUserByUsername = username =>
  fetcher(endpoints.GET_USER_BY_USERNAME(username));

export {
  getProject,
  getTeam,
  getUserById,
  getUserByUsername,
};
