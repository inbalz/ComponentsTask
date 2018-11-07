import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
  temperature: number;
  description: string;
  cityName: string;
  constructor() { }

  ngOnInit() {
    this.temperature = 22;
    this.description = "My Description";
    this.cityName = "Portland";
  }

}
