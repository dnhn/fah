import { AxiosRequestConfig } from 'axios';

import { Project, Team, User, Work } from '../../common/interfaces';
import { fetcher, internalFetcher } from '../fetcher';

export async function requestor<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  return await fetcher.get(url, config);
}

export async function internalRequestor<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  return await internalFetcher.get(url, config);
}

export const getUserById = async (id: number): Promise<User> => await requestor('/uid/' + id);

export const getUserByName = async (name: string): Promise<User> => await requestor('/user/' + name);

export const getProject = async (id: number): Promise<Project> => await requestor('/project/' + id);

export const getProjects = async (name: string): Promise<number[]> => await requestor(`/user/${name}/projects`);

export const getTeam = async (id: number): Promise<Team> => await requestor('/team/' + id);

export const getWork = async (): Promise<Work> => await internalRequestor('/work');
