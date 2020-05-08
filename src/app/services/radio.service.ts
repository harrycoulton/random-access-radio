import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RadioService {
  public baseUrl = 'http://www.radio-browser.info/webservice/json/stations/bytag/';
  public currentStation;

  constructor(private http: HttpClient) { }

  public getRadioStation = async (searchTerm) => {
    await this.http
      .get<any>(this.baseUrl + searchTerm)
      .subscribe(data => {
        this.currentStation = this.randomArrayItem(data);
        console.log(this.currentStation);
      });
  }

  public randomArrayItem = (array) => {
    const randomArrayInt = (Math.floor(Math.random() * Math.floor(array.length)));
    return array[randomArrayInt];
  }

}
