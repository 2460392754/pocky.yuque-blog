import { RepoGetSearchType } from '../dto/repo.dto';

export class Repo {
    getRepo(id: string, token?: string | undefined);
    getRepoToc(id: string, token?: string | undefined);
    getRepoSearch({  name, type, token }: IGetRepoSearch);
}

export interface IGetRepoSearch {
    name: string;
    type?: RepoGetSearchType;
    token: string | undefined;
}

export interface RepoGetInfoApi {}
export interface RepoGetTocApi {}
export interface RepoGetSearchApi {}
