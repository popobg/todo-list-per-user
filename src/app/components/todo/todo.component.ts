import { Component, signal } from '@angular/core';
import { Todos } from '../../models/todo';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';

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
    FormsModule
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
export class TodoComponent {
  
  todos = signal<Todos>([{
    id: '1',
    txt: 'Task 1',
    done: false,
    editable: false
  }, {
    id: '2',
    txt: 'Task 2',
    done: false,
    editable: false
  }, {
    id: '3',
    txt: 'Task 3',
    done: false,
    editable: false
  }]);
  txt = signal<string>('');
  showTasks: boolean = false;

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

  removeTask(id: string) {
    //TODO: implémenter la suppression d'une tâche dans la liste
  }

  addTask(txt: string) {
    if (!txt) return
    //TODO: implémenter l'ajout d'une tâche dans la liste
    this.todos.update(todos => {
      todos.unshift({
        id: String(todos.length + 1),
        txt,
        done: false,
        editable: false
      });
      return todos;
    })
  }

}
