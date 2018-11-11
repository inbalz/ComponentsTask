import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { WeatherListComponent } from './components/weather-list/weather-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  })
export class AppComponent {
  title = 'app';
}
