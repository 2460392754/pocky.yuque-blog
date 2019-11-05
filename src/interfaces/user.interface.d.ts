import { UserInfo } from './yuque.interface';

export class User {
    getInfo(id: string): Promise<UserGetInfoApi>;
    getTokenInfo(id: string);
}

export interface UserGetInfoApi extends UserInfo {}
export interface UserGetTokenInfoApi extends UserInfo {}
