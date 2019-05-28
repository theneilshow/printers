import { Component, OnInit } from '@angular/core';
import { DataService } from "./data.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'printers';
  welcome: boolean;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.checkSource.subscribe(welcome => this.welcome = welcome);
  }

}
 