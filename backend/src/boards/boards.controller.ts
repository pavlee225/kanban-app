import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './schemas/board.schema';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  async getAllBoards(): Promise<Board[]> {
    return this.boardsService.findAll();
  }

  @Post()
  async createBoard(@Body() board: Board): Promise<Board> {
    return this.boardsService.create(board);
  }
}
