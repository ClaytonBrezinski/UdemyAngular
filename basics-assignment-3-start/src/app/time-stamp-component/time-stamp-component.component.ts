import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-time-stamp-component',
  templateUrl: './time-stamp-component.component.html',
  styleUrls: ['./time-stamp-component.component.css']
})
export class TimeStampComponentComponent implements OnInit {

  @Input() clickNumber: Number;
  timeStamp: string;
  blueBackground = {};


  constructor() {
  }

  ngOnInit() {
    this.timeStamp = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
    if (this.clickNumber >= 5) {
      this.blueBackground = {backgroundColor: 'blue'};
    }
  }
}

