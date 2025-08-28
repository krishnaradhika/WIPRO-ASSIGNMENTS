import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from "../material.module";
interface Task {
  title: string;
  done: boolean;
}
@Component({
  selector: 'app-to-do-list',
  imports: [FormsModule, CommonModule, MaterialModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
 newTask = '';
  tasks: Task[] = [];

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ title: this.newTask.trim(), done: false });
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
