import { Component, OnInit } from '@angular/core';
import { Printer } from '../printer';
import { PrinterService } from '../printer.service';

@Component({
  selector: 'app-add-printer',
  templateUrl: './add-printer.component.html',
  styleUrls: ['./add-printer.component.css']
})
export class AddPrinterComponent implements OnInit {

  name:string;

  constructor(private _printerService : PrinterService) { }

  ngOnInit() {
  }

  addPrinter() {
    alert(this.name);
  }

}
