import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondPageRoutingModule } from './second-page-routing.module';
/*модуль для работы с http */
import { HttpClientModule } from '@angular/common/http';

/*компонент*/
import { TodoListSecondPageComponent } from '../todo-list-second-page/todo-list-second-page.component';

/*сервис*/
import {HttpService} from '../../../services/http.service';


import { MatCheckboxModule } from '@angular/material/checkbox'; /*чек бокс*/

@NgModule({
  imports: [
    CommonModule,
    SecondPageRoutingModule,
    HttpClientModule,
    MatCheckboxModule,

  ],
  declarations: [
    TodoListSecondPageComponent
  ],
  providers: [
    HttpService
  ],
  bootstrap: [TodoListSecondPageComponent]
})
export class SecondPageModule {  }
