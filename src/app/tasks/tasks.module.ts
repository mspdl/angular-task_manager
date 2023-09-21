import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListTaskComponent } from './list';
import { TaskService } from './shared';

@NgModule({
  declarations: [ListTaskComponent],
  imports: [CommonModule],
  providers: [TaskService],
})
export class TasksModule {}
