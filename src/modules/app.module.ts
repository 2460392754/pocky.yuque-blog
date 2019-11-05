import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { UserModule } from './user.module';
import { RepoModule } from './repo.module';
import { DocModule } from './doc.module';

@Module({
    imports: [UserModule, RepoModule, DocModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
