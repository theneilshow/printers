import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Printer } from './printer';

@Injectable({
  providedIn: 'root'
})
export class PrinterService {

  _url = "./printers.json";

  constructor(private _http: HttpClient) { }

  newPrinter(printer: Printer) {
    return this._http.post<any>(this._url, printer);
  }

  getPrinters(printer: Printer) {
    return this._http.post<any>(this._url, printer);
  }

}
