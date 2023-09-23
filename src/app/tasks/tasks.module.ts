import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TaskComponent } from './task';
import { ListTaskComponent } from './list';
import { TaskService } from './shared';

@NgModule({
  declarations: [ListTaskComponent, TaskComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [TaskService],
})
export class TasksModule {}
