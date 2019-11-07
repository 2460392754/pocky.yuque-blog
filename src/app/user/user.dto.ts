import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class InfoDto {
    @ApiModelProperty({ description: '语雀用户id' })
    @IsNotEmpty({ message: 'userId 不能为空' })
    readonly userId: string;
}

export class TokenInfoDto {
    @ApiModelProperty({ description: '语雀token' })
    @IsNotEmpty({ message: 'token 不能为空' })
    readonly token: string;
}
