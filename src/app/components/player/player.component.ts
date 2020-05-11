import {Component, Input, OnInit} from '@angular/core';
import { Howl } from 'howler';
import { RadioService } from '../../services/radio/radio.service';
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
    volume: this.radioService.volume,
    loop: true});
  public currentStation: StationModel;
  public stationError: boolean;
  public loading = true;
  public loaded = false;
  public playing = false;
  public paused = false;
  @Input() public Harry;

  constructor(private radioService: RadioService) {
  }

  ngOnInit(): void {
    this.radioService.stationErrorChange.subscribe(value => {
      this.static.unload();
      this.stationError = value;
      if (this.stationError && this.sound){
        this.sound.unload();
        this.currentStation = undefined;
        this.sound = undefined;
      }
    });
    this.radioService.currentStationChange.subscribe(value => {
      if (value.name){
        if (value !== undefined){
          this.loadStation(value);
        }
      }
    });
  }

  public loadStation = (station) => {
    this.currentStation = station;
    if (this.sound) {
      this.sound.unload();
      this.sound = undefined;
    }
    this.static.load();
    this.static.play();
    this.playing = false;
    this.paused = false;
    this.loaded = false;
    this.loading = true;
    if (!this.sound && station) {
      this.setStation(station.url, station.codec);
    }
    if (this.sound){
      this.sound.on('load', () => {
        this.static.unload();
        this.playing = true;
        this.loaded = true;
        this.loading = false;
        this.radioService.addToSessionList();
      });
      this.sound.on('loaderror', () => {
        this.radioService.getRadioStation(this.radioService.currentSearchTerm);
      });
    }
    this.sound.play();
  }

  public setStation = (radioUrl, radioFormat) => {
    this.sound = new Howl({
      src: [radioUrl],
      format: [radioFormat],
      volume: this.radioService.volume,
      autoplay: false,
      html5: true
    });
  }

  public play = () => {
    if (!this.sound.playing()){
      this.sound.play();
      this.playing = true;
      this.paused = false;
    }
  }

  public pause = () => {
    this.sound.pause();
    this.playing = false;
    this.paused = true;
  }

  public setVolume = (event) => {
    this.radioService.volume = event.value / 10;
    this.sound.volume(this.radioService.volume);
    this.static.volume(this.radioService.volume);
  }

  public capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
