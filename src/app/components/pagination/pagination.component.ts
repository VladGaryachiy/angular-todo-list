import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../todo';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  countButton: number[];
  @Input() todosLength;
  @Output() visibleTodos = new EventEmitter();


  constructor() { }
  ngOnInit() {
  }
  ngOnChanges() {
    this.createPaginationButton();

    if (this.todosLength <= 3) {
        this.visibleTodos.emit(this.todosLength);
    } else {
      this.visibleTodos.emit(3);
    }

  }

  createPaginationButton() {
     if (this.todosLength) {
       this.countButton = [];
       for (let i = 0; i < this.todosLength / 3; i++) {
         this.countButton.push(i + 1);
       }
     } else {
       this.countButton = [];
     }
  }
}
