import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Todo } from '../../../todo';
import { CoordDataInterface } from '../../../interfaces/paginationCoordsData';


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
        this.numberButtonClick -= 1;
 /*       this.countClick -= 3;*/

        if (this.numberButtonClick <= 0) {
          this.numberButtonClick = 1;
        }

        const to = this.numberButtonClick * this.countElementsInPage;
        let from: number = null;

        if (this.numberButtonClick <= this.countElementsInPage) {
          from = (this.numberButtonClick * this.countElementsInPage)  - this.countElementsInPage;
        } else {
          from = (this.numberButtonClick * this.countElementsInPage) - this.countElementsInPage;
        }

        const resultCoordData: CoordDataInterface = {from: from, to: to};

        this.clickPrevButton.emit(resultCoordData);
  }



  onClickNextButton(): void {
    this.numberButtonClick += 1;
    let to: number = this.numberButtonClick * this.countElementsInPage;

    if (to > this.todosLength ) {
        to = this.todosLength;
    }

    let from: number = (this.numberButtonClick * this.countElementsInPage) - this.countElementsInPage;
    if (from >= this.todosLength) {
      this.numberButtonClick -= 1;
      from = (this.numberButtonClick * this.countElementsInPage) - this.countElementsInPage;
    }
    const resultCoordData: CoordDataInterface = {from: from, to: to};

    this.clickNextButton.emit(resultCoordData);

  }
}
