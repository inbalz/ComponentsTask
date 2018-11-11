import { Component, OnInit } from '@angular/core';
import {Iweather} from '../../interfaces/iweather';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit, Iweather {

  cityName: string;
  description: string;
  temperature: number;

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

  constructor() { }


  ngOnInit() { }
}
