import { Component, OnInit } from '@angular/core';
import {Iweather} from '../../interfaces/iweather';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit, Iweather {

  weatherData: Iweather[] = [
    {
      description: "d",
      cityName: "ss",
      temperature: 20
    }
  ];
  constructor() { }

  ngOnInit() { }
}
