import { Component, inject, OnInit, signal } from '@angular/core';
import { Todo, Todos } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-todo',
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatCardModule,
    FormsModule,
  ],
  templateUrl: './todo.component.html',
  styles: `
    button {
      margin-top: 10px;
    }
    .done {
      text-decoration: line-through;
    }
  `
})
export class TodoComponent implements OnInit {
  todoService = inject(TodoService);
  todos = signal<Todos>([]);
  userTodos = signal<Todos>([]);
  txt = signal<string>('');
  showTasks: boolean = false;
  currentUserId = '1'; // Exemple : Utilisateur connecté avec l'ID '1'

  ngOnInit(): void {
    this.todoService.findAll().subscribe((data) => {
      this.todos.set(data);  // Mettre à jour le signal avec les tâches
    });
  }

  showTask() {
    this.showTasks = !this.showTasks;
  }
  
  completeTask(id: string) {
    this.todos.update(todos => {
      const task = todos.find(t => t.id === id);
      if (task) task.done = !task.done;
      return todos;
    })
  }

  // Charger les tâches par utilisateur
  loadUserTodos(userId: string): void {
    this.todoService.findByUserId(userId).subscribe((userTodos) => {
      this.userTodos.set(userTodos);  // Mettre à jour le signal des tâches utilisateur
    });
  }

  toggleState(todo: Todo) {
    this.todoService.updateTodo({ ...todo, done: !todo.done });
  }

  // Méthode pour créer une nouvelle tâche
  createTodo(event: KeyboardEvent, txt: string): void {
    if (event.key === 'Enter') {
      // Créer la tâche via le service
      this.todoService.createTodo({ txt }, this.currentUserId).subscribe((newTodo) => {
        // Ajouter la nouvelle tâche dans le signal 'todos'
        this.todos.update(todos => [newTodo, ...todos]);
      });
    }
  }

  editTodo(todo: Todo) {
    todo.editable = !todo.editable;

    if (!todo.editable) {
      this.todoService.updateTodo(todo);
    }
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo.id);
  }
}
