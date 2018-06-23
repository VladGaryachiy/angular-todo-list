import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Todo } from '../../../todo';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit, OnChanges {

  @Input() todos: Todo[];
  @Output() deleteTodo = new EventEmitter();
  @Output() updateTodo = new EventEmitter();
  @Output() sortByDate = new EventEmitter();
  @Output() sortByName = new EventEmitter();


  ngOnInit() {
  }
  ngOnChanges () {

  }

  onDelete(id: number): void {
    this.deleteTodo.emit(id);
  }

  onUpdate(id: number, name: string): void {
    this.updateTodo.emit([id, name]);
  }

  onSortTodoByDate(): void {
    this.sortByDate.emit();

  }
  onSortTodoByName(): void {
    this.sortByName.emit();
    console.log('in todo-list-items');
    console.log(this.todos);

  }



}
