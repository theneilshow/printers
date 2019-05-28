import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {
  
  machineId:Number;
  public changedId:Number;

  message:boolean = true;
    
  @Output() messageEvent = new EventEmitter<boolean>();

  @Input() looking: Boolean

  public machines = [
    {id: 1, name: "big printer"},
    {id: 2, name: "medium printer"},
    {id: 3, name: "yellow printer"},
    {id: 4, name: "other big printer"}
  ];

  constructor(private router: Router) { }

  onChange(id){
    this.changedId = id;
    this.router.navigate(['/printer', id]);
    this.looking = true
  }



  ngOnInit() {
  }

  
}
