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

  private getId(): number {
    return Math.floor(Math.random() * 100);
  }
  private getDate(): string {
    let result: string = '';
    const date: any = new Date();
    return result = date.toUTCString().replace('GMT', '').trim();
  }

  public createTodo(name: string): void {
    const todo: Todo = new Todo(this.getId(), name, this.getDate());
    this._todos = [...this._todos, todo];
    this.localStorageService.setLocalStorage(this._todos);
  }

  public deleteTodo(todoId: number): void {
    this._todos = this._todos.filter(todo => todo.id !== todoId);
    this.localStorageService.setLocalStorage(this._todos);
  }

  public updateTodo(todoId: number, name: string): void {
      this._todos.forEach( todo => {
          if (todo.id === todoId) {
            todo.name = name;
            todo.dateUpdate = this.getDate();
          }
      });
    this.localStorageService.setLocalStorage(this._todos);
  }
  public searchTodos(nameSearch: string): Todo[] {
    const search_todo: Todo[] = [];
    const req = new RegExp(nameSearch, 'i');

   if (this._todos) {
     this._todos.forEach(item => {
       if (req.test(item.name)) {
         search_todo.push(item);
       }
     });
   }
    if (search_todo.length) {
      return search_todo;
    } else {
      return this._todos;
    }

  }
  public sortByName(): void {
    this._todos.sort((a, b) => {
      const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    });
  }
  public sortByDate(): any {
   /* this._todos.sort(function(a, b) {
      return new Date(b.dateCreate) - new Date(a.dateCreate);
    });*/
  }




}
