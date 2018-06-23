import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';



@Component({
  selector: 'app-todo-list-second-page',
  templateUrl: './todo-list-second-page.component.html',
  styleUrls: ['./todo-list-second-page.component.scss']
})
export class TodoListSecondPageComponent implements OnInit {
  data: any;
  check: boolean =  false;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

   getData() {
    this.check = !this.check;
      this.httpService.httpGetData().subscribe( data => {this.data = data; } );
      console.log(this.data);
   }
}
