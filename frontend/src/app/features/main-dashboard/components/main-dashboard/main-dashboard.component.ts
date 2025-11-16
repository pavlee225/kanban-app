import { Component, inject, signal } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { BoardService } from '../../../boards/services/board.service';
import { Board } from '../../../boards/models/board.model';
import { TasksBoardComponent } from '../tasks-board/tasks-board.component';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [SidebarComponent, TasksBoardComponent],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss',
})
export class MainDashboardComponent {
  private boardService = inject(BoardService);

  boards = signal<Board[]>([]);

  clickedBoard: Board = <Board>{};
  showSidebar = true;

  ngOnInit() {
    this.boardService.getBoards().subscribe({
      next: (response) => {
        console.log(response);
        this.boards.set(response);
        if (response.length > 0) {
        this.clickedBoard = response[0];
      }
      },
      error: (error) => {
        console.error('Error fetching boards:', error);
      },
    });
  }

  getClickedBoard(board: Board) {
    this.clickedBoard = board;
  }
  toggleSidebar(event: any){
    console.log("🚀 ~ MainDashboardComponent ~ toggleSidebar ~ event:", event);
    this.showSidebar = event
  }
}
