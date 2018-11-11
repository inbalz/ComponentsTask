import { Component, OnInit, Input } from '@angular/core';
import {Iweather} from '../../interfaces/iweather';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
  temperature: number;
  description: string;
  cityName: string;
  @Input() weatherItem: Iweather;
  constructor() { }

  ngOnInit() {

  }

}
