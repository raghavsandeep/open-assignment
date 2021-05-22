import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  value: number = 35000;
  value2: number = 5000;
  options: Options = {
    floor: 1000,
    ceil: 500000
  };
  options2: Options = {
    floor: 1000,
    ceil: 40000
  };
  constructor() { }

  ngOnInit(): void {
  }

}
