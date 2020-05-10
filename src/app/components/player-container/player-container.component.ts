import { Component, OnInit } from '@angular/core';
import {RadioService} from '../../services/radio.service';

@Component({
  selector: 'app-player-container',
  templateUrl: './player-container.component.html',
  styleUrls: ['./player-container.component.scss']
})
export class PlayerContainerComponent implements OnInit {
  public audioContext = window.AudioContext;
  public player: boolean;

  constructor(public radioService: RadioService) { }

  ngOnInit(): void {
    this.radioService.showPlayer.subscribe(value => {
      this.player = value;
    });
  }
}
