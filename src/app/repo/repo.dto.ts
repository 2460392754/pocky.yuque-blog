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

// list
export class GetlistQueryDto {
    @ApiModelProperty({ description: '语雀的用户id' })
    @IsNotEmpty({ message: 'userId 不能为空' })
    userId: string;

    @ApiModelProperty({ description: '仓库类型', required: false })
    type: 'Book' | 'Design' | 'all';

    @ApiModelProperty({ description: '分页，一页20条', required: false })
    offset: number;
}

export class GetListHeadersDto extends CommonHeadersDto {}

// toc
export class GetInfoTocQueryDto extends CommonQueryDto {}
export class GetInfoTocHeadersDto extends CommonHeadersDto {}

// search
export class GetInfoSearchQueryDto extends CommonQueryDto {}
export class GetInfoSearchHeadersDto extends CommonHeadersDto {}
