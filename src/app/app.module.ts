import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*компоненты*/
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListFormComponent } from './components/todo-list-form/todo-list-form.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

/*сервисы*/
import { LocalStorageService } from './services/local-storage.service';
import { TodoListService } from './services/todo-list.service';


@NgModule({

  /*тут записываються все компоненты которые мы создали*/
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListFormComponent,
    ListItemsComponent
  ],

  /*тут все импортированые модули, которые нужны для роботы с компонентами*/
  imports: [
    BrowserModule, FormsModule
  ],

  /*тут будем подключать сервисы*/
  providers: [
    TodoListService,
    LocalStorageService
  ],
  /*тут указываеться главный компонент, который будет запускаться*/
  bootstrap: [AppComponent]
})
export class AppModule { }
