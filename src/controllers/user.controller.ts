import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserGetInfoDto } from '../dto/user.dto';
import { Token } from '../decorator/token.decorator';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    /**
     * 使用 token 获取用户信息
     * @param token 语雀的token
     */
    @Get()
    getTokenInfo(@Token() token: string) {
        return this.userService.getTokenInfo(token);
    }

    /**
     * 使用 用户id 获取用户信息
     * @param id 用户id
     */
    @Get(':id')
    getInfo(@Param() param: UserGetInfoDto) {
        return this.userService.getInfo(param.id);
    }
}
