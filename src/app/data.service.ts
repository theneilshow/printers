import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  checkSource = new BehaviorSubject(true);
  welcome = this.checkSource.asObservable();

  constructor() { }

  changeWelcome(welcome: boolean) {
    this.checkSource.next(welcome)
  }

}  