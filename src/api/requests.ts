import { AxiosRequestConfig } from 'axios';

import { Project, Team, User, Work } from '../common/interfaces';
import { fetcher, lambdaFetcher } from './fetcher';

export async function requestor<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  return await fetcher.get(url, config);
}

export async function lambdaRequestor<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  return await lambdaFetcher.get(url, config);
}

export const getUserById = async (id: number): Promise<User> => await lambdaRequestor('/uid/' + id);

export const getUserByName = async (name: string): Promise<User> => await lambdaRequestor('/user/' + name);

export const getProject = async (id: number): Promise<Project> => await lambdaRequestor('/project/' + id);

export const getProjects = async (name: string): Promise<number[]> => await lambdaRequestor(`/user/${name}/projects`);

export const getTeam = async (id: number): Promise<Team> => await lambdaRequestor('/team/' + id);

export const getWork = async (): Promise<Work> => await lambdaRequestor('/work');
