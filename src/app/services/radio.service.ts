import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {StationModel} from '../models/station.model';

@Injectable({
  providedIn: 'root'
})
export class RadioService {
  public baseUrl = 'https://fr1.api.radio-browser.info/json/stations/bytag/';
  public currentStation: StationModel;
  public currentSearchTerm;
  public sessionList = [];
  public volume: number;
  public stationError = false;
  public stationErrorChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public sessionListChange: BehaviorSubject<StationModel[]> = new BehaviorSubject<StationModel[]>(this.sessionList);
  public currentStationChange: BehaviorSubject<StationModel> = new BehaviorSubject<StationModel>(this.currentStation);

  constructor(private http: HttpClient) {}

  public getRadioStation = async (searchTerm) => {
        this.currentSearchTerm = searchTerm;
        this.http
          .get(this.baseUrl + searchTerm)
          .subscribe(
            data => {
              if (!Object.keys(data).length){
                this.currentStation = undefined;
                this.stationError = true;
                this.stationErrorChange.next(this.stationError);
                console.log('error logged in service');
              } else {
                this.stationError = false;
                this.stationErrorChange.next(this.stationError);
                const randomStation = this.randomArrayItem(data);
                this.currentStation = {
                  name: randomStation.name,
                  codec: randomStation.codec,
                  country: randomStation.country,
                  region: randomStation.state,
                  language: randomStation.language,
                  homepage: randomStation.homepage,
                  url: randomStation.url
                };
                this.currentStationChange.next(this.currentStation);
              }
            });
      }

  public randomArrayItem = (array) => {
    const randomArrayInt = (Math.floor(Math.random() * Math.floor(array.length)));
    return array[randomArrayInt];
  }

  public addToSessionList = () => {
    if (!this.sessionList.includes(this.currentStation)){
      this.sessionList.push(this.currentStation);
      this.sessionListChange.next(this.sessionList);
    }
  }

}
