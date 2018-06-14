import { Component , ViewChild} from '@angular/core';
/*модуль по которому мы определяем дочерний елемент чтобы использовать его свойства*/
import { TodoListContainerComponent } from './todo-list-container/todo-list-container.component';


interface UpdateArr {
  id: number;
  name: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = 'Nick';
  goStyle: boolean = false;
  UpdateTodoData: UpdateArr[];

  updateTodo(arr: Array<UpdateArr>) {
   this.UpdateTodoData = arr;
  }


}
