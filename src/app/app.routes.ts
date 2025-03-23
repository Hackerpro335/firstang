import { Routes } from '@angular/router';
import { TodoListComponent } from './task-list/task-list.component';
import { TodoDetailsComponent } from './components/pages/todo-details/todo-details.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'todos', component: TodoListComponent },
    { path: 'todos/:id', component: TodoDetailsComponent },
    { path: '**', component: NotFoundComponent }
];
