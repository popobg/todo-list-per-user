import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'todos',
        children: [
            { path: 'list', component: TodoComponent },
            { path: 'details/:id', component: TodoDetailsComponent },
            { path: 'form', component: TodoFormComponent }
        ]
    },
    {
        path: 'users',
        children: [
            { path: 'list', component: UserListComponent },
            { path: 'details/:id', component: UserDetailsComponent },
            { path: 'form', component: UserFormComponent }
        ]
    }
];
