import { BrowserModule } from '@angular/platform-browser'; /*модуль для работы с браузерными приложениями*/
import { NgModule } from '@angular/core'; /*главный модуль который собирает все компоненты и подключает другие модули для работы с ними*/
import { FormsModule } from '@angular/forms'; /*модуль для работы с формами*/

import { AppComponent } from './app.component';
import { TodoListFormComponent } from './todo-list-form/todo-list-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListPaginationComponent } from './todo-list-pagination/todo-list-pagination.component';
import { TodoListContainerComponent } from './todo-list-container/todo-list-container.component';

@NgModule({

  /*тут записываються все компоненты которые мы создали*/
  declarations: [
    AppComponent,
    TodoListFormComponent,
    TodoListComponent,
    TodoListPaginationComponent,
    TodoListContainerComponent
  ],

  /*тут все импортированые модули, которые нужны для роботы с компонентами*/
  imports: [
    BrowserModule, FormsModule
  ],

  /*тут будем подключать сервисы*/
  providers: [],
  /*тут указываеться главный компонент, который будет запускаться*/
  bootstrap: [AppComponent]
})
export class AppModule { }
