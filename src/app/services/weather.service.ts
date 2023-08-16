import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  cityName: string = 'London';

  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      `${environment.WEATHER_API_BASE_URL}q=${cityName}&appid=${environment.OPENWEATHERMAP_APPID}&units=metric`
    );
  }
}
