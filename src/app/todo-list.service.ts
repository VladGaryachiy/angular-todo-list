///<reference path="../../node_modules/@angular/core/src/di/injectable.d.ts"/>
import { Injectable } from '@angular/core';
import { Todos, setLocalStorage, getLocalStorage } from './localStorage';
import Todo from './todo';

const todos: Todo[] = Todos;

@Injectable({
  providedIn: 'root'
})

export class TodoListService {

  constructor() { }

  generateId() {
    return Math.floor(Math.random() * 100);
  }

  generateDate() {

    const date: any = new Date();
    const year: string = date.getFullYear();
    const month: string = date.getMonth();
    const day: string = date.getDay();
    const hour: string = date.getHours();
    const minute: string = date.getMinutes();
    const second: string = date.getSeconds();

    let result: string = null;

    return result = `${day} ${month} ${year} ${hour}:${minute}:${second}`;
  }

  createTodo(name: string) {
    const todo: Todo = new Todo(this.generateId(), name, this.generateDate());
    todos.push(todo);

    setLocalStorage(todos); /*записали в localStorage*/
    getLocalStorage(); /*добавили изминения в обьект TODOS*/

  }

  updateTodo() {

  }

  deleteTodo(id: number) {
    let searchElementForDelete: number;
    todos.forEach((item, i) => {
      if ( item.id === id ) {
        searchElementForDelete = i;
      }
      todos.splice(i, 1);

      setLocalStorage(todos); /*записали в localStorage*/
      getLocalStorage(); /*добавили изминения в обьект TODOS*/
    });
  }

}
