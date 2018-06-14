import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Todo from '../todo';
import {TodoListService} from '../todo-list.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todo: Todo;
  @Output() updateTodo = new EventEmitter();

  constructor(public todoListService: TodoListService) { }

  ngOnInit() {
  }

  onDeleteTodo(id: number): void {
    this.todoListService.deleteTodo(id);
  }

  onUpdateTodo(id: number, name: string) {
    let updateData: [number, string];
    updateData = [id, name];
    this.updateTodo.emit(updateData);
  }
}
