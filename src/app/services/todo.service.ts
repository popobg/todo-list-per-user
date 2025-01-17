import { inject, Injectable } from '@angular/core';
import { Todo, Todos } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly http = inject(HttpClient);
  private todos: Todos = [];

  findAll(): Observable<Todos> {
    return this.http.get<Todos>('http://localhost:3000/todos');
  }

  findById(id: string): Observable<Todo> {
    return this.http.get<Todo>('http://localhost:3000/todos/${id}');
  }

  findByUserId(userId: string): Observable<Todos> {
    return this.http.get<Todos>(`http://localhost:3000/todos?userId=${userId}`);
  }

  createTodo(toCreate: Partial<Todo>, userIdGive: string): Observable<Todo> {
    return this.http.post<Todo>('http://localhost:3000/todos/',{
      ...toCreate,
      id: crypto.randomUUID(),
      done: false,
      editable: false,
      userId: userIdGive,
    });
  }

  updateTodo(toUpdate: Todo): Observable<Todo> {
    return this.http.put<Todo>('http://localhost:3000/todos/${toUpdate.id}',toUpdate)
  }

  deleteTodo(id: string): Observable<void> {
    return this.http.delete<void>('http://localhost:3000/todos/${id}')
  }
}
