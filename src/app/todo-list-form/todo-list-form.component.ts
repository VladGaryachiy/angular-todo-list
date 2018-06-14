import { Component, OnInit, Input } from '@angular/core';
import {TodoListService} from '../todo-list.service';

@Component({
  selector: 'app-todo-list-form',
  templateUrl: './todo-list-form.component.html',
  styleUrls: ['./todo-list-form.component.scss']
})
export class TodoListFormComponent implements OnInit {

  newTodo: string;

  constructor(private todoService: TodoListService) { }

  @Input() updateTodo;

  ngOnInit() {
  }

  createTodo() {
    if (this.newTodo) {
      this.todoService.createTodo(this.newTodo);
    }
  }


}
