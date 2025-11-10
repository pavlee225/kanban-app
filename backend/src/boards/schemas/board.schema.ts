import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BoardDocument = Board & Document;

class Subtask {
  @Prop({ required: true })
  title: string;

  @Prop({ default: false })
  isCompleted: boolean;
}

class Task {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  status: string;

  @Prop({ type: [Subtask], default: [] })
  subtasks: Subtask[];
}

class Column {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [Task], default: [] })
  tasks: Task[];
}

@Schema()
export class Board {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [Column], default: [] })
  columns: Column[];
}

export const BoardSchema = SchemaFactory.createForClass(Board);
