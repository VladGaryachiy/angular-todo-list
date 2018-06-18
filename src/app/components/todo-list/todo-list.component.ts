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
  todosForVisible: Todo[] = [];

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
    this.todos = this.todoListService.todos;
  }
  sortByName(): void {
    this.todoListService.sortByName();
    this.todos = this.todoListService.todos;
  }
  visibleTodos(vTodo: number): void {
    this.todosForVisible.length = 0;
      for ( let i = 0; i < vTodo; i++) {
        this.todosForVisible[i] = this.todos[i];
      }

  }
  clickNumberButton(coordPage): void {
    const from = coordPage[0];
    const to = coordPage[1];

    if (this.todos.length > 3) {
      if (to > this.todos.length) {
        this.todosForVisible.length = 0; /*очищаем если естб даные*/
        for (let i = from; i < this.todos.length; i++) {
          this.todosForVisible.push(this.todos[i]); /*- позиции елементов в массиве*/
        }
      } else {
        this.todosForVisible.length = 0; /*очищаем если естб даные*/
        for (let i = from; i < to; i++) {
          this.todosForVisible.push(this.todos[i]);
        }
      }
    }
  }
  clickNextButton(coordPage): void {
    const from = coordPage[0];
    const to = coordPage[1];
    this.todosForVisible.length = 0; /*очищаем если естб даные*/
    for (let i = from; i <= to; i++) {
      this.todosForVisible.push(this.todos[i]); /*- позиции елементов в массиве*/
    }
  }
  clickPrevButton(coordPage): void {
    const from = coordPage[0];
    const to = coordPage[1];
    this.todosForVisible.length = 0; /*очищаем если естб даные*/
    for (let i = from; i <= to; i++) {
      this.todosForVisible.push(this.todos[i]); /*- позиции елементов в массиве*/
    }
  }


}
