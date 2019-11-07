import { Controller, Get, Query, Headers } from '@nestjs/common';
import { UserService } from './user.service';
import { InfoDto, TokenInfoDto } from './user.dto';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { HeadersDecorator } from '../../common';

@ApiUseTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    /**
     * @deprecated: 获取单个用户信息
     * @param query
     */
    @Get()
    info(@Query() query: InfoDto) {
        return this.userService.info(query);
    }

    /**
     * 获取认证的用户的个人信息, 需要token
     * @param headers
     * @param h
     */
    @Get('token')
    @ApiResponse({ status: 200, description: 'success' })
    @ApiResponse({ status: 400, description: 'Forbidden' })
    tokenInfo(@HeadersDecorator() headers: TokenInfoDto, @Headers() h: TokenInfoDto) {
        return this.userService.tokenInfo(headers);
    }
}
