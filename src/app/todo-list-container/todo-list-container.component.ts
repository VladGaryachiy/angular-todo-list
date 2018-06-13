import { Component, OnInit } from '@angular/core';
import Todo from '../todo';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.scss']
})
export class TodoListContainerComponent implements OnInit {

	 todos:Todo[] = [
	   {id:1, name:"1", dateCreate:"qwe", dateUpdate:"asdasd"},
	   {id:1, name:"2", dateCreate:"qwe", dateUpdate:"asdasd"},
       {id:1, name:"3", dateCreate:"qwe", dateUpdate:"asdasd"}
    ]		


  constructor() { }

  ngOnInit() {
  }

}
