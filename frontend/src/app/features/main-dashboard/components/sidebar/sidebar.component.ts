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
  @Output() showSidebar = new EventEmitter();
  boards = input<Board[]>([]);
  showHideBar = true;

  selectBoard(board: Board) {
    this.boardClicked.emit(board);
  }
  toggleSidebar(){
    this.showSidebar.emit(!this.showHideBar);
    console.log("🚀 ~ SidebarComponent ~ toggleSidebar ~ showHideBar:", this.showHideBar)
  }
}
