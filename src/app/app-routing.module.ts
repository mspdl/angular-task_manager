import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskRoutes } from './tasks';

export const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  ...TaskRoutes,
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
