import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Todo } from '../todo';



@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private _todos: any = [];
  constructor(private localStorageService: LocalStorageService) {
  }

  public get todos(): Todo[] {
    return this._todos = this.localStorageService.getLocalStorage();
  }

  private getId() {
    return Math.floor(Math.random() * 100);
  }
  private getDate() {
    let result: string = '';
    const date: any = new Date();
    return result = date.toUTCString().replace('GMT').trim();
  }

  public createTodo(name: string) {
    const todo: Todo = new Todo(this.getId(), name, this.getDate());
    this._todos = [...this._todos, todo];
    this.localStorageService.setLocalStorage(this._todos);
  }

  public deleteTodo(todoId: number) {
    this._todos = this._todos.filter(todo => todo.id !== todoId);
    this.localStorageService.setLocalStorage(this._todos);
  }

  public updateTodo(todoId: number, name: string) {


      this._todos.forEach( todo => {
          if (todo.id === todoId) {
            todo.name = name;
          }
      });
    this.localStorageService.setLocalStorage(this._todos);
  }


}
