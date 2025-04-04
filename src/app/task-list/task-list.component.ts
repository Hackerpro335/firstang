import { Component } from '@angular/core';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  standalone: true, // Set standalone to true
})

export class TodoListComponent {
  tasks: Task[] = [];
  taskName: string = '';

  addTask() {
    if (this.taskName.trim()) {
      this.tasks.push({
        id: Date.now(),
        name: this.taskName,
        completed: false
      });
      this.taskName = '';
    }
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
  }

  get isAllTasksIsComplete(): boolean {
    return this.tasks.every(task => !task.completed);
  }

  deleteCompletedTasks() {
    this.tasks = this.tasks.filter(task => !task.completed);
  }
}