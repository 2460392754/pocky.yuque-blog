import { Module } from '@nestjs/common';
import { RepoController } from '../controllers/repo.controller';
import { RepoService } from '../services/repo.service';

@Module({
    controllers: [RepoController],
    providers: [RepoService]
})
export class RepoModule {}
