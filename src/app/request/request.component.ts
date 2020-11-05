import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myDate = new Date();
  
    minDate = new Date(
      this.myDate.getFullYear(),
      this.myDate.getMonth() - 2,
      this.myDate.getDate()
    );
  
    maxDate = new Date(
      this.myDate.getFullYear(),
      this.myDate.getMonth() + 2,
      this.myDate.getDate()
    );
  
   onlyWeekendsPredicate = function(date) {
      var day = date.getDay();
      return day === 0 || day === 6;
    };
  
  
}
