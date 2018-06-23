import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListSecondPageComponent } from '../todo-list-second-page/todo-list-second-page.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListSecondPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondPageRoutingModule { }
