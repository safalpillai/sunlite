import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    static API_URL = 'http://api.openweathermap.org/data/2.5/weather';
    static API_KEY = 'b6bc51f2affd7dcb8cbe7ff2b9a685f5';
    /* For temperature in Fahrenheit use units=imperial
    For temperature in Celsius use units=metric
    Temperature in Kelvin is used by default, no need to use units parameter in API call **/
    static UNITS = 'metric';

    constructor(private http: HttpClient) {
        
    }

    query(city: string): Observable<Object> {
        let queryUrl = `${WeatherService.API_URL}?q=${city}&appid=${WeatherService.API_KEY}&units=${WeatherService.UNITS}`;
        console.log(`weather.service.query().queryUrl = ${queryUrl}`);
        return this.http.get(queryUrl).pipe(
            map(data => {
                return data
            })
        );
    }

    queryById(id: string): Observable<Object> {
        let queryUrl = `${WeatherService.API_URL}?id=${id}&appid=${WeatherService.API_KEY}&units=${WeatherService.UNITS}`;
        console.log(`weather.service.query().queryUrl = ${queryUrl}`);
        return this.http.get(queryUrl).pipe(
            map(data => {
                return data
            })
        );
    }

    forecast(id: string): Observable<Object> {
        let queryUrl = `${WeatherService.API_URL}?id=${id}&appid=${WeatherService.API_KEY}&units=${WeatherService.UNITS}`;
        return this.http.get(queryUrl).pipe(
            map(data => {
                return data
            })
        );
    }

    strip(str: string): string {
        return str.toString().substring(0, 2);
    }
}
