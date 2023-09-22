import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreateTaskComponent } from './create/';
import { EditTaskComponent } from './edit';
import { ListTaskComponent } from './list';
import { TaskService } from './shared';

@NgModule({
  declarations: [ListTaskComponent, CreateTaskComponent, EditTaskComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [TaskService],
})
export class TasksModule {}
