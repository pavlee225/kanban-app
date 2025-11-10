import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Board, BoardDocument } from './schemas/board.schema';
import { Model } from 'mongoose';

@Injectable()
export class BoardsService {
  constructor(
    @InjectModel(Board.name) private boardModel: Model<BoardDocument>,
  ) {}

  async findAll(): Promise<Board[]> {
    return this.boardModel.find().exec();
  }

  async create(board: Board): Promise<Board> {
    const newBoard = new this.boardModel(board);
    return newBoard.save();
  }
}
