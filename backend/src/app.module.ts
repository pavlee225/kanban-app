import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/kanbanapp'), BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
