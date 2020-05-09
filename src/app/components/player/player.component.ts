import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Howl, Howler } from 'howler';
import {RadioService} from '../../services/radio.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnChanges {
  public sound: Howl;
  public static = new Howl({
    src: 'assets/static.mp3',
    format: 'mp3',
    volume: this.radioService.volume});
  public currentStation;
  public lastStation;
  public loading = true;
  public loaded = false;
  @Input() public radioUrl: string;
  @Input() public radioFormat: string;

  constructor(public radioService: RadioService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.static.load();
    this.static.play();
    if (!this.radioService.sessionList.includes(this.radioService.currentStation)){
      this.radioService.sessionList.push(this.radioService.currentStation);
    }
    this.currentStation = this.radioService.currentStation;
    if (changes.radioUrl.previousValue){
      this.sound.unload();
      this.lastStation = changes.radioUrl.previousValue;
    }
    this.setStation(this.radioUrl, this.radioFormat);
    this.sound.on('load', () => {
      this.static.unload();
      this.loaded = !this.loaded;
    });
    this.sound.play();
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
  }

  public setVolume = (event) => {
    this.radioService.volume = event.value / 10;
    this.sound.volume(this.radioService.volume);
  }

}
