
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodosModule} from './components/todos-component/todos-module/todos.module';



const routes: Routes = [
  { path: 'todoList',  loadChildren: './components/todos-component/todos-module/todos.module#TodosModule' },
  { path: 'secondTodoList',  loadChildren: './components/second-page/second-page/second-page.module#SecondPageModule' },
  {
    path: '',
      redirectTo: '',
      pathMatch: 'full'
   }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
