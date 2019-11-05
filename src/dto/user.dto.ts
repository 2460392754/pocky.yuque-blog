import { IsString } from 'class-validator';

export class UserGetInfoDto {
    @IsString()
    id: string;
}

export class UserGetTokenInfoDto {
    @IsString()
    'x-auth-token': string;
}
