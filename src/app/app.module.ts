import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListFormComponent } from './todo-list-form/todo-list-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListPaginationComponent } from './todo-list-pagination/todo-list-pagination.component';
import { TodoListContainerComponent } from './todo-list-container/todo-list-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListFormComponent,
    TodoListComponent,
    TodoListPaginationComponent,
    TodoListContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
