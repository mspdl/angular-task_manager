import { Routes } from '@angular/router';
import { CreateTaskComponent } from '../create';
import { EditTaskComponent } from '../edit';
import { ListTaskComponent } from '../list';

export const TaskRoutes: Routes = [
  { path: 'tasks', redirectTo: 'tasks/list' },
  { path: 'tasks/list', component: ListTaskComponent },
  { path: 'tasks/add', component: CreateTaskComponent },
  { path: 'tasks/edit/:id', component: EditTaskComponent },
];
