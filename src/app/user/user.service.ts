import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CurlService } from '../../common';
import { InfoDto, TokenInfoDto } from './user.dto';
import { IUserInfoApi, IUserInfoTokenApi } from '../../common';

@Injectable()
export class UserService {
    constructor(private readonly curlService: CurlService) {}

    /**
     * 获取单个用户信息
     * @param dto
     */
    info(params: InfoDto): Observable<IUserInfoApi> {
        const { userId } = params;

        return this.curlService.get('/users/' + userId);
    }

    /**
     * 获取认证的用户的个人信息, 需要token
     * @param headers
     */
    tokenInfo(headers: TokenInfoDto): Observable<IUserInfoTokenApi> {
        const { token } = headers;

        return this.curlService.get('/user', {
            headers: {
                'X-Auth-Token': token
            }
        });
    }
}
