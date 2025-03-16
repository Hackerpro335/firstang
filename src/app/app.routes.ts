import { Routes } from '@angular/router';
import { TodoListComponent } from './task-list/task-list.component';
import { HomeComponent } from './components/pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'todos', component: TodoListComponent },
    { path: '**', redirectTo: '' }
];
