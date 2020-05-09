import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';
import { RadioService } from '../../services/radio.service';
import { StationModel } from '../../models/station.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  public sound: Howl;
  public static = new Howl({
    src: 'assets/static.mp3',
    format: 'mp3',
    volume: this.radioService.volume});
  public failedSearch = new Howl({
    src: 'assets/fail.mp3',
    format: 'mp3',
    volume: this.radioService.volume});
  public currentStation: StationModel;
  public stationError: boolean;
  public loading = true;
  public loaded = false;

  constructor(private radioService: RadioService) {
  }

  ngOnInit(): void {
    this.radioService.stationErrorChange.subscribe(value => {
      this.stationError = value;
      if (this.stationError && this.sound){
        this.currentStation = undefined;
        this.sound.unload();
        this.failedSearch.play();
      }
    });
    this.radioService.currentStationChange.subscribe(value => {
      this.currentStation = value;
      if (this.sound) {this.sound.unload(); }
      this.static.load();
      this.static.play();
      this.loaded = false;
      this.loading = true;
      this.setStation(this.currentStation.url, this.currentStation.codec);
      this.sound.on('load', () => {
        this.static.unload();
        this.loaded = true;
        this.loading = false;
        this.radioService.addToSessionList();
      });
      this.sound.on('loaderror', () => {
        this.radioService.getRadioStation(this.radioService.currentSearchTerm);
      });
      this.sound.play();
    });
  }

  public setStation = (radioUrl, radioFormat) => {
    this.sound = new Howl({
      src: [radioUrl],
      format: [radioFormat],
      volume: this.radioService.volume,
      html5: true
    });
  }

  public play = () => {
    this.sound.play();
  }

  public pause = () => {
    this.sound.pause();
    this.sound.unload();
  }

  public setVolume = (event) => {
    this.radioService.volume = event.value / 10;
    this.sound.volume(this.radioService.volume);
    this.static.volume(this.radioService.volume);
  }

}
