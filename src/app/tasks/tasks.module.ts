import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateTaskComponent } from './create/';
import { ListTaskComponent } from './list';
import { TaskService } from './shared';

@NgModule({
  declarations: [ListTaskComponent, CreateTaskComponent],
  imports: [CommonModule, FormsModule],
  providers: [TaskService],
})
export class TasksModule {}
