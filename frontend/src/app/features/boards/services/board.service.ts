import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Board } from '../models/board.model';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(private http: HttpClient) {}

  getBoards() {
    return this.http.get<Board[]>('http://localhost:3000/boards');
  }
}
