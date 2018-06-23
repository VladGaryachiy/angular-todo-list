import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private httpClient: HttpClient) { }

  httpGetData(): Observable<any> {
    const url = 'https://anapioficeandfire.com/api/characters/583/';
    return this.httpClient.get(url).pipe(map( data => {
      const title =  data['titles'];
      return title;
    }));
  }

}
