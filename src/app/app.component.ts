import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { UserDetailsComponent } from "./components/user-details/user-details.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoComponent, UserDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}