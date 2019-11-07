import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

// common
class CommonQueryDto {
    @ApiModelProperty({ description: '语雀的仓库id' })
    @IsNotEmpty({ message: 'repoId 不能为空' })
    repoId: string;
}

class CommonHeadersDto {
    @ApiModelProperty({ description: '语雀token', required: false })
    token: string | undefined;
}

// info
export class GetInfoQueryDto extends CommonQueryDto {}
export class GetInfoHeadersDto extends CommonHeadersDto {}

// toc
export class GetInfoTocQueryDto extends CommonQueryDto {}
export class GetInfoTocHeadersDto extends CommonHeadersDto {}

// search
export class GetInfoSearchQueryDto extends CommonQueryDto {}
export class GetInfoSearchHeadersDto extends CommonHeadersDto {}
