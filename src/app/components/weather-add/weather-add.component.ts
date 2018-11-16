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

  submitForm() {
    this.searchForecast(this.city);
  }

  searchForecast(city: string): any {
    debugger;
    this.weatherService.getLocationInfo(this.city).toPromise().then(response => {
      return this.weatherService.getForecast(response[0].woeid).toPromise().then(x => this.generateForecast(x));
     });
   }

  generateForecast(forecastObject: any) {
    if (forecastObject !== undefined)
    {
      alert('forecastObject:' + forecastObject);
      if (forecastObject.consolidated_weather.length > 0)
      {
        let item: Iweather = {
          description: forecastObject.consolidated_weather[0].weather_state_name,
          cityName: forecastObject.title,
          temperature: forecastObject.consolidated_weather[0].max_temp
        };
        this.notify.emit(item);
      }
    }
  }
}
