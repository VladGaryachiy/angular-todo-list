import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*зависимости*/
import { TodosRoutingModule } from './todos-routing.module';
import { FormsModule } from '@angular/forms';

/*компоненты*/
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoListFormComponent } from '../todo-list-form/todo-list-form.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { PaginationComponent } from '../pagination/pagination.component';

/*сервисы*/
import { LocalStorageService } from '../../../services/local-storage.service';
import { TodoListService } from '../../../services/todo-list.service';


@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule
  ],
  declarations: [
    TodoListComponent,
    TodoListFormComponent,
    ListItemsComponent,
    PaginationComponent
  ],
  providers: [
    TodoListService,
    LocalStorageService,
  ],
  bootstrap: [TodoListComponent]
})
export class TodosModule { }
