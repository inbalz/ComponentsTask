import { Component, OnInit } from '@angular/core';
import {Iweather} from '../../interfaces/iweather';
import {WeatherService} from '../../services/weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit, Iweather {

  cityName: string;
  description: string;
  temperature: number;
  _weatherItems: Iweather[];
  _weatherItem: Iweather[] = [
    {
      description: "Southern city",
      cityName: "Atlanta",
      temperature: 30
    },
    {
      description: "in Oregon",
      cityName: "Portland",
      temperature: 17
    },
    {
      description: "Washington State",
      cityName: "Seattle",
      temperature: 20
    }
  ];

  onNotifyClicked(newItem: Iweather) {
    this._weatherItem.push(newItem);
  }
  constructor(private weatherService: WeatherService) {
    this._weatherItems = this.weatherService.getWeatherItems();
  }


  ngOnInit() { }
}
