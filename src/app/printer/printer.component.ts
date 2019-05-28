import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DataService } from "../data.service";

@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.css']
})
export class PrinterComponent implements OnInit {

  public machineNumber;
  welcome:boolean;
  
  constructor(private route: ActivatedRoute, private router: Router, private data: DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.machineNumber = id;
    });

    this.data.welcome.subscribe(welcome => this.welcome = welcome);
  }

  print() {
    this.router.navigate(['/printer', this.machineNumber, 'print']);
    
  }

  maintain() {
    this.router.navigate(['/printer', this.machineNumber, 'maintain']);
  }

  

}
