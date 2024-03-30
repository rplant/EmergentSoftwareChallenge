import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCandy();
  }

  getCandy() {
    this.http.get('http://localhost:5000/candy').subscribe(data => {
      console.log(data)
    })
  }


  getForecasts() {
    this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
      {
        next: (result) => {
        },
        error: (error) => console.error(error)
      }
        
    );
  }

  title = 'emergentsoftwarechallenge.client';
}

