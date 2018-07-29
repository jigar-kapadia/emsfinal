import { Component, OnInit,Output } from '@angular/core';
import {MatDatepickerModule} from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  @Output() onDatePicked = new EventEmitter<any>();
  constructor() { }
  
  ngOnInit() {
  }

  getDate(date : any)
  {
    this.onDatePicked.emit(date);
  }
}
