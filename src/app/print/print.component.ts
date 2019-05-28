import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  isPrinting: boolean = false;
  isFinished: boolean = false;
  unsuccessful: boolean = false;
  successful: boolean = false;
  printStatus: string = "ready";
  machineNumber;


  @Output() messageEvent = new EventEmitter<boolean>();

  startPrint() {
    this.isPrinting = true;
    this.printStatus = "printing";
  }

  stopPrint() {
    this.isPrinting = false;
    this.isFinished = true;
    this.printStatus = "ready";
  }

  successfulTick(e) {
    this.successful = true;
    alert("hello");

  }

  unsuccessfulTick(e) {
    alert("hello");
    this.unsuccessful = true;
    if (this.successful === true) {
      this.successful = false;
    }

  }

  back() {
    this.router.navigate(['/printer', this.machineNumber]);
  }


  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.machineNumber = id;
    });
  }
}
