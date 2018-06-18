import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import {TodoListService} from '../../services/todo-list.service';

@Component({
  selector: 'app-todo-list-form',
  templateUrl: './todo-list-form.component.html',
  styleUrls: ['./todo-list-form.component.scss']
})
export class TodoListFormComponent implements OnInit {

  todoName: string ;
  eventInput: any;
  switchButton: boolean = false;

  @Output() createNewTodo = new EventEmitter();
  @Output() saveUpdate = new EventEmitter();
  @Output() searchTodos = new EventEmitter();

  @Input() set updateText(nameTodoForUpdate: string) {
    if (nameTodoForUpdate != null || undefined) {
      this.eventInput.target[0].value = nameTodoForUpdate;
      this.switchButton = true;
    }
  }


  ngOnInit() {
  }

  onCreateTodo(event: Event): void {
    this.createNewTodo.emit(this.todoName);
    this.eventInput = event;
  }

  onSaveUpdate(): void {
    this.saveUpdate.emit([this.todoName, this.eventInput.target[0]]);
    this.switchButton = false;
  }

  onSearchTodo(): void {
    this.searchTodos.emit(this.todoName);
  }

}
