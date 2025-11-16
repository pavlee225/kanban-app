import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://pavlekostic997_db_user:CUyuj2V8vdsSdESn@cluster0.1osth8g.mongodb.net/kanbanapp',
    ),
    BoardsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// MongooseModule.forRoot('mongodb://localhost:27017/kanbanapp')
