import { IsString } from 'class-validator';

export class DocGetDocsDto {
    @IsString()
    id: string;
}

export class DocGetDocDto {
    @IsString()
    id: string;
    docId: string;
}
