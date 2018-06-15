import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  @Input() todos: Todo[];
  @Output() deleteTodo = new EventEmitter();
  @Output() updateTodo = new EventEmitter();

  ngOnInit() {
  }

  onDelete(id: number): void {
    this.deleteTodo.emit(id);
  }

  onUpdate(id: number, name: string): void {
    this.updateTodo.emit([id, name]);
  }




}
