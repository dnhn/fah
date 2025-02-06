export interface User {
  active_50: number;
  active_7: number;
  id: number;
  last: string;
  name: string;
  rank: number;
  score: number;
  teams: UserTeam[];
  users: number;
  wus: number;
}

export interface Team {
  founder: string;
  id: number;
  logo: string;
  name: string;
  rank: number;
  score: number;
  url: string;
  wus: number;
}

export interface UserTeam {
  active_50: number;
  active_7: number;
  founder: string;
  last: number;
  logo: string;
  name: string;
  score: number;
  team: number;
  trank: number;
  tscore: number;
  twus: number;
  url: string;
  wus: number;
}

export interface Project {
  cause: string;
  description: string;
  institution: string;
  manager: string;
  mdescription: string;
  modified: string;
  mthumb: string;
  projects: string;
  thumb: string;
  url: string;
}

export interface Work {
  data: {
    creditestimate: number;
    eta: string;
    percentdone: string;
    project: number;
    status: string;
  }[];
  dateTime: number;
  id: number;
}
