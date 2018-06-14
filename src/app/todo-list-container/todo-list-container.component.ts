import { Component, OnInit } from '@angular/core';
import Todo from '../todo';
import {Todos} from '../localStorage';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.scss']
})
export class TodoListContainerComponent implements OnInit {

  todos: Todo[] = Todos;


  constructor() { }

  ngOnInit() {

  }

}
