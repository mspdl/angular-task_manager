import { Routes } from '@angular/router';
import { ListTaskComponent } from '../list';
import { TaskComponent } from '../task';

export const TaskRoutes: Routes = [
  { path: 'tasks', component: ListTaskComponent },
  { path: 'task', component: TaskComponent },
  { path: 'task/:id', component: TaskComponent },
];
