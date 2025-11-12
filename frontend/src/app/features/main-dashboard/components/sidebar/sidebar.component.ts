import { Component, EventEmitter, input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Board } from '../../../boards/models/board.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Output() boardClicked = new EventEmitter();
  boards = input<Board[]>([]);

  selectBoard(board: Board) {
    this.boardClicked.emit(board);
  }
}
