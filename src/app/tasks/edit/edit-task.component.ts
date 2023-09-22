import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task, TaskService } from '../shared';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  @ViewChild('taskForm', { static: true }) taskForm: NgForm;
  task: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const taskId = +this.route.snapshot.params['id'];
    this.task = this.taskService.getTaskById(taskId);
  }

  onUpdate(): void {
    if (this.taskForm.form.valid) {
      this.taskService.updateTask(this.task);
      this.router.navigate(['tasks']);
    }
  }
}
