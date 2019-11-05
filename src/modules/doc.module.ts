import { Module } from '@nestjs/common';
import { DocController } from '../controllers/doc.controller';
import { DocService } from '../services/doc.service';

@Module({
    controllers: [DocController],
    providers: [DocService]
})
export class DocModule {}
