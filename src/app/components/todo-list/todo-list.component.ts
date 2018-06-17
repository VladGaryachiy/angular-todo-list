import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';
import { Todo } from '../../todo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  idTodoForUpdate: number = 0;
  nameTodoForUpdate: string;


  constructor(private todoListService: TodoListService  ) { }
  ngOnInit() {   }

  createTodo(name: string): void {
    this.todoListService.createTodo(name);
    this.todos = this.todoListService.todos;
  }

  deleteTodo(id: number): void {
    this.todoListService.deleteTodo(id);
    this.todos = this.todoListService.todos;
  }

  updateTodo(arr): void { /*при нажатии кнопки в задаче*/
      this.idTodoForUpdate = arr[0];
      this.nameTodoForUpdate = arr[1]; /*этот текст должен попасть в input*/
  }
  saveUpdate(arr): void {
    this.todoListService.updateTodo(this.idTodoForUpdate, arr[0]); /*отправляем сервису id елемента, и изменненый текст*/
    arr[1].value = '';
  }

  searchTodos(text: string): void {
    this.todos = this.todoListService.searchTodos(text);
  }
  sortByDate(): void {
    this.todoListService.sortByDate();
  }
  sortByName(): void {
    this.todoListService.sortByName();
  }



}
