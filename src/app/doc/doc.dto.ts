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
export class GetInfoQueryDto extends CommonQueryDto {
    @ApiModelProperty({ description: '语雀的文档id' })
    @IsNotEmpty({ message: 'docId 不能为空' })
    docId: string;
}

export class GetInfoHeadersDto extends CommonHeadersDto {}

// toc
export class GetTocQueryDto extends CommonQueryDto {}
export class GetTocHeadersDto extends CommonHeadersDto {}
