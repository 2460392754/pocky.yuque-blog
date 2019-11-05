import { IsString } from 'class-validator';

export class RepoGetInfoDto {
    @IsString()
    id: string;
}

export class RepoGetTocDto {
    @IsString()
    id: string;
}

export class RepoGetSearchParam {
    @IsString()
    id: string;
}

export class RepoGetSearchQuery {
    @IsString()
    name: string;
    type: RepoGetSearchType;
}

export type RepoGetSearchType = 'Book' | 'Design' | undefined;
