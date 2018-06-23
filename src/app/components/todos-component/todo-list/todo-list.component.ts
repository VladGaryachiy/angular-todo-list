import { Component, OnInit, OnChanges } from '@angular/core';
import { TodoListService } from '../../../services/todo-list.service';
import { Todo } from '../../../todo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  todosForVisible: Todo[] = [];
  checkSort: boolean = false;

  idTodoForUpdate: number = 0;
  nameTodoForUpdate: string;


  constructor(private todoListService: TodoListService  ) { }
  ngOnInit() {
    this.todoListService.todos.subscribe(todos => { this.todos = todos; });
    console.log(1);
  }

  createTodo(name: string): void {
    this.todoListService.createTodo(name);
    console.log(this.todos);
/*    this.todos-module = this.todoListService.todos-module;*/
  }

  deleteTodo(id: number): void {
    this.todoListService.deleteTodo(id);
   /* this.todos-module = this.todoListService.todos-module;*/
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
    this.todoListService.searchTodos(text);
   /* this.todos-module = this.todoListService.searchTodos(text);*/
  }
  sortByDate(): void {
    this.todoListService.sortByDate();
    this.checkSort = !this.checkSort;
  }
  sortByName(): void {
    this.todoListService.sortByName();
    this.checkSort = !this.checkSort;
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
    const from =  coordPage.from;
    const to = coordPage.to;
    this.todosForVisible.length = 0; /*очищаем если естб даные*/
    for (let i = from; i < to; i++) {
      this.todosForVisible.push(this.todos[i]); /*- позиции елементов в массиве*/
    }
  }
  clickPrevButton(coordPage): void {
    const from = coordPage.from;
    const to = coordPage.to;
    this.todosForVisible.length = 0; /*очищаем если естб даные*/
    for (let i = from; i < to; i++) {
      this.todosForVisible.push(this.todos[i]); /*- позиции елементов в массиве*/
    }
  }


}
