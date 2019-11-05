import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/user.interface';
import * as Api from '../api/user.api';

@Injectable()
export class UserService implements User {
    getInfo(id: string) {
        return Api.getInfoApi(id);
    }

    getTokenInfo(token: string) {
        return Api.getTokenInfoApi(token);
    }
}
