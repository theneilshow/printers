import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Print } from '../print';
import { PrintService } from '../print.service'

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private _printService: PrintService) { }

  isPrinting: boolean = false;
  isFinished: boolean = false;
  unsuccessful: boolean = false;
  successful: boolean = false;
  printStatus: string = "ready";
  machineNumber;
  
  // printModel = new Print(2, 'holder.jpg', false, "3", false, false, 'a comment');


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

  display(){
    alert();
  }

  onSubmit(){
    // console.log(this.printModel);
    this._printService.newPrint(this.printModel)
    .subscribe(
      data => console.log("Success!", data),
      error => console.log("Error!", error)
    )
  }


  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.machineNumber = id;
    });
  }
}
