import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToDoListComponent} from "./to-do-list/to-do-list.component";

const routes: Routes = [
  {
    path: '',
    component: ToDoListComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
