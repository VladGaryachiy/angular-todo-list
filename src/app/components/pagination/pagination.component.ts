import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Todo } from '../../todo';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  countButton: number[] = [];
  countClick: number = 0; /*считааем кол-во нажатий*/
  countElementsInPage: number = 3; /*кол-во елементов на странице*/
  lastPage: number = null; // координаты последней страницы
  selectNumberButton: number = null; /*определяем какие кнопки красить*/
  numberButtonClick: number = 1;

  @Input() todosLength;
  @Input() checkSort; /*импорт для того что бы работала сортировка*/
  @Output() visibleTodos = new EventEmitter();
  @Output() clickNumberButton = new EventEmitter();
  @Output() clickPrevButton = new EventEmitter();
  @Output() clickNextButton = new EventEmitter();


  constructor() { }
  ngOnInit() {
  }
  ngOnChanges() {
    this.createPaginationButton();
    this.countClick = 0;
    this.numberButtonClick = 1;

    /*реагируем на сортировку*/
    if (this.todosLength <= 3 ) {
      this.visibleTodos.emit(this.todosLength);
    } else {
      this.visibleTodos.emit(3);
    }

  }
  createPaginationButton(): void {
     if (this.todosLength) {
       this.countButton = [];
       for (let i = 0; i < this.todosLength / 3; i++) {
         this.countButton.push(i + 1);
       }
     } else {
       this.countButton = [];
     }
  }

  onNumberButtonClick(numberButton: number, event: Event): void {
    this.numberButtonClick = numberButton; /*записываем номер кнопки на которую нажали*/
    if (numberButton === 1) {
      this.countClick = 0;
    } else {
      this.countClick = numberButton * 3 - 3;
    }
    const from = this.countElementsInPage * numberButton - 3; /*от*/
    const to = this.countElementsInPage * numberButton; /*до*/

    this.clickNumberButton.emit([from, to]);
  }

  onClickPrevButton(): void {
    const selectedTodos: number[] = [];

    this.lastPage = this.todosLength -  this.countClick; /*остаток с последней страницы*/

    if (this.countClick >= 3) {
      this.countClick -= 3; /*если нажали то добаляем 3 */
    }
    this.numberButtonClick -= 1;

    if (this.todosLength >  this.countClick) {
      selectedTodos.length = 0;
      for (let i = this.countClick ; i < this.countClick + 3; i++ ) {
        selectedTodos.push(i);
      }
    }
    /*если осталось 1 елемента*/
    if (this.lastPage === 1) {
      selectedTodos.length = 0;
      for (let i = this.todosLength - 4; i < this.todosLength - 1; i++ ) {
        selectedTodos.push(i);
      }
    }
    /*елси остался 2 елемент*/
    if (this.lastPage === 2) {
      selectedTodos.length = 0;
      for (let i = this.todosLength - 5; i < this.todosLength - 2; i++ ) {
        selectedTodos.push(i);
      }
    }

    if (this.countClick <= 0) {
      selectedTodos.length = 0;
      this.countClick = 0;
      this.selectNumberButton = 1;
      for (let i = this.countClick; i <  this.countClick + 3; i++ ) {
        selectedTodos.push(i);
      }
    }

    const from: number = selectedTodos[0];
    const to: number = selectedTodos[2];
    this.clickPrevButton.emit([from, to]);
  }



  onClickNextButton(): void {
    const selectedTodos: number[] = [];
      if (this.countClick === 0) {
        this.countClick += 3;
      } else {
        this.countClick += 3;
      }
    if (this.countClick < this.todosLength) {
      this.lastPage = this.todosLength -  this.countClick; /*остаток с последней страницы*/
    }


/*    this.countClick += 3; /!*если нажали то добаляем 3 *!/*/
    this.numberButtonClick += 1;

    if (this.todosLength >  this.countClick) {
      selectedTodos.length = 0;
      for (let i = this.countClick; i < this.countClick + 3; i++ ) {
        selectedTodos.push(i);
      }
    }
    /*если осталось 1 елемент*/
    if (this.lastPage === 1) {
      selectedTodos.length = 0;
      for (let j = this.todosLength - 1; j < this.todosLength; j++ ) {
        selectedTodos.push(j);
      }
    }
    /*елси остался 2 елемент*/
    if (this.lastPage === 2) {
      selectedTodos.length = 0;
      for (let k = this.todosLength - 2; k < this.todosLength; k++ ) {
        selectedTodos.push(k);
      }
    }

    if (this.countClick >= this.todosLength) {
      selectedTodos.length = 0;
      this.selectNumberButton  = Math.ceil(this.todosLength / 3);
      this.countClick = this.countClick - 3;
      for (let r = this.todosLength - this.lastPage; r < this.todosLength; r++ ) {
        selectedTodos.push(r);
      }
    }

    let from: number = null;
    let to: number = null;

    if (selectedTodos.length === 1) {
      from = selectedTodos[0];
      to = selectedTodos[0];
      this.clickNextButton.emit([from, to]);
    }

    if (selectedTodos.length === 2) {
      from = selectedTodos[0];
      to = selectedTodos[1];
      this.clickNextButton.emit([from , to]);
    }

    if (selectedTodos.length === 3) {
      from = selectedTodos[0];
      to = selectedTodos[2];
      this.clickNextButton.emit([from, to]);
    }

  }
}
