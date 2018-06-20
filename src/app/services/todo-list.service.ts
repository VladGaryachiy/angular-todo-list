import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Todo } from '../todo';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private _todos;
  private todosData: Todo[] = [];
  constructor(private localStorageService: LocalStorageService) {
  }

  public get todos(): Observable<Todo[]> {
     if (!this._todos) {
       const todos = this.localStorageService.getLocalStorage();
       this._todos = new Subject();
       this._todos.next(todos);
     }
     return this._todos.asObservable();

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
    this.todosData = [...this.todosData, todo];
    this._todos.next(this.todosData);
/*    this.localStorageService.setLocalStorage(this._todos);*/
  }

  public deleteTodo(todoId: number): void {
    this.todosData = this.todosData.filter(todo => todo.id !== todoId);
    this._todos.next(this.todosData);
/*    this.localStorageService.setLocalStorage(this._todos);*/
  }

  public updateTodo(todoId: number, name: string): void {
    this.todosData.forEach( todo => {
          if (todo.id === todoId) {
            todo.name = name;
            todo.dateUpdate = this.getDate();
          }
      });
    this._todos.next(this.todosData);
/*    this.localStorageService.setLocalStorage(this._todos);*/
  }
  public searchTodos(nameSearch: string): void {
    const search_todo: Todo[] = [];
    const req = new RegExp(nameSearch, 'i');

   if (this.todosData) {
     this.todosData.forEach(item => {
       if (req.test(item.name)) {
         search_todo.push(item);
       }
     });
   }
    if (search_todo.length) {
      this._todos.next(search_todo);
  /*    return search_todo;*/
    } else {
      this._todos.next(this.todosData);
    }

  }
  public sortByName(): void {
    this.todosData.sort((a, b) => {
      const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    });
    this._todos.next(this.todosData);
  }
  public sortByDate(): void {
    this.todosData.sort(function (a, b) {
      if (a.dateCreate < b.dateCreate) {
        return 1;
      }
      if (a.dateCreate > b.dateCreate) {
        return -1;
      }
    });
    this._todos.next(this.todosData);
  }

}
