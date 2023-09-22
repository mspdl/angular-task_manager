import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../shared';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
})
export class ListTaskComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.updateTasks();
  }

  updateTasks(): void {
    this.tasks = this.taskService.getAllTasks();
  }
}
