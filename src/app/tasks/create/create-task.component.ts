import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Task, TaskService } from '../shared';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  @ViewChild('taskForm', { static: true }) taskForm: NgForm;
  task: Task;

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.task = new Task();
  }

  createTask(): void {
    if (this.taskForm.form.valid) {
      this.taskService.createTask(this.task);
      this.router.navigate(['/tasks']);
    }
  }
}
