import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Print } from './print';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  _url = "";

  constructor(private _http: HttpClient) { }

  newPrint(print: Print) {
    return this._http.post<any>(this._url, print);
  }


}
