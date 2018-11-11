import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-weather-add',
  templateUrl: './weather-add.component.html',
  styleUrls: ['./weather-add.component.css']
})
export class WeatherAddComponent implements OnInit {
  tempature: number;
  description: string;
  city: string;
  submitForm() {
    alert('form submitted');
  }
  constructor() { }

  ngOnInit() {
  }

}
