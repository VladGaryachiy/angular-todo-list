import { Injectable } from '@angular/core';
import { Todo } from '../todo';

interface ObjForData {
  data: Todo[];
}
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  decoration: ObjForData = {
    data : null
  };

  public setLocalStorage(todos: Todo[]) {
    this.decoration.data = todos;
    const objStr = JSON.stringify(this.decoration.data);
    localStorage.setItem('object', objStr);
  }

  public getLocalStorage() {
    const todos = JSON.parse(localStorage.getItem('object'));
    return todos;
  }

}
