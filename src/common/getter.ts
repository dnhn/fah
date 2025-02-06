import { endpoints } from './api';
import { Project, Team, User, Work } from './interfaces';

async function fetcher<T>(url: string) {
  return fetch(url, { mode: 'no-cors' }).then(res => res.json()) as Promise<T>;
}

const getProject = (project: number) => fetcher<Project>(endpoints.GET_PROJECT(project));

const getTeam = (team: number) => fetcher<Team>(endpoints.GET_TEAM(team));

const getUserById = (id: number) => fetcher<User>(endpoints.GET_USER_BY_ID(id));

const getUserByUsername = (username: string) =>
  fetcher<User>(endpoints.GET_USER_BY_USERNAME(username));

const getWorkStatus = async () =>
  await (await fetch(endpoints.GET_WORK_STATUS)).json() as Promise<Work>;

export {
  getProject,
  getTeam,
  getUserById,
  getUserByUsername,
  getWorkStatus,
};
