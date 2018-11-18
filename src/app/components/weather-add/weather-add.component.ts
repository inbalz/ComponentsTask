import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Iweather} from '../../interfaces/iweather';
import {WeatherService} from '../../services/weather.service';

@Component({
  selector: 'app-weather-add',
  templateUrl: './weather-add.component.html',
  styleUrls: ['./weather-add.component.css']
})
export class WeatherAddComponent implements OnInit {
  @Output() notify: EventEmitter<Iweather> = new EventEmitter<Iweather>();
  tempature: number;
  description: string;
  city: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  async submitForm() {
    const locationInfo = await this.weatherService.getLocationInfo(this.city).toPromise();
    const forcast = await this.weatherService.getForecast(locationInfo[0].woeid).toPromise();
    return this.generateForecast(forcast);
  }

  generateForecast(forecastObject: any) {
    if (forecastObject !== undefined && forecastObject.consolidated_weather.length > 0) {
        this.notify.emit({
          description: forecastObject.consolidated_weather[0].weather_state_name,
          cityName: forecastObject.title,
          temperature: forecastObject.consolidated_weather[0].max_temp
        });
    }
  }
}
