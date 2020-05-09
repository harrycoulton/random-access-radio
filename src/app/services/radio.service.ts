import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RadioService {
  public baseUrl = 'https://fr1.api.radio-browser.info/json/stations/bytag/';
  public currentStation;
  public lastStation;
  public sessionList = [];
  public stationError = false;
  public volume: number;
  public serverResponse;
  public apiError = false;
  public baseUrlList;

  constructor(private http: HttpClient) {}

  public getRadioStation = async (searchTerm) => {
        if (this.currentStation) { this.lastStation = this.currentStation; }
        this.http
          .get(this.baseUrl + searchTerm)
          .subscribe(
            data => this.currentStation = this.randomArrayItem(data),
            error1 => this.stationError = true);
        if (this.stationError){
          // do something
        }
      }

  public randomArrayItem = (array) => {
    const randomArrayInt = (Math.floor(Math.random() * Math.floor(array.length)));
    return array[randomArrayInt];
  }

}
