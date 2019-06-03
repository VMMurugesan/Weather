import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/observable';
import {catchError, map} from 'rxjs/operators';
import { Weather } from '../model/weather';

@Injectable()
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/forecast';
  params = {
    q: '',
    cnt: '8',
    units: 'metric',
    APPID: '70df039b4334561f2bf6ed50a3a37f6e'
  };

  constructor(private httpClient: HttpClient) { }

  searchWeatherForCity(cityName: string ): Observable<Weather> {

    const urlParams: string = [
      `?q=${cityName}`,
      `cnt=${this.params.cnt}`,
      `units=${this.params.units}`,
      `appid=${this.params.APPID}`
    ].join('&');

    const queryUrl = `${this.url}${urlParams}`;

  // implement the service
    return this.httpClient.get<Weather>(queryUrl)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
    }
}
