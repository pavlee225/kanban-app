import { Component, inject } from '@angular/core';
import { BoardService } from '../../../boards/services/board.service';
import { Board } from '../../../boards/models/board.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  private boardService = inject(BoardService);

  boards: Board[] = [];

  ngOnInit() {
    this.boardService.getBoards().subscribe({
      next: (response) => {
        console.log(response);
        this.boards = response;
      },
      error: (error) => {
        console.error('Error fetching boards:', error);
      },
    });
  }
}
