import {Component, Input, OnInit} from '@angular/core';
import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  public sound: Howl;
  @Input() public radioUrl: string;
  @Input() public radioFormat: string;

  constructor() {
  }

  ngOnInit(): void {
    this.sound = new Howl({
      src: ['http://stream.laut.fm/risefm'],
      format: ['mp3']
    });
    this.sound.play();
  }

}
