import { Injectable } from '@angular/core';
import { Iweather } from '../interfaces/iweather';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  _weather_data: Iweather[];
  _basedomainLocation = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=';
  _basedomainForecast = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/';

    constructor(private _http: HttpClient) { }

  getWeatherItems(): Array<Iweather> {
    return this._weather_data;
  }

  getLocationInfo(city: string): Observable<any> {
    return this._http.get<Array<any>>(this._basedomainLocation + city);
  }

  getForecast(woied: number): Observable<any> {
    return this._http.get<any>(this._basedomainForecast + woied);

  }
}
