import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherItemComponent } from './components/weather-item/weather-item.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { WeatherAddComponent } from './components/weather-add/weather-add.component';
import {WeatherModule} from '../modules/weather/weather.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WeatherModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
