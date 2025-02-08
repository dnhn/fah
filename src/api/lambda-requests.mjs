const host = 'https://api.foldingathome.org';

export const getUserById = async (id) => await fetch(host + '/uid/' + id);

export const getUserByName = async (name) => await fetch(host + '/user/' + name);

export const getProject = async (id) => await fetch(host + '/project/' + id);

export const getProjects = async (name) => await fetch(host + `/user/${name}/projects`);

export const getTeam = async (id) => await fetch(host + '/team/' + id);
