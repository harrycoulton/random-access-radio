import { Component, OnInit } from '@angular/core';
import {RadioService} from '../../services/radio/radio.service';

@Component({
  selector: 'app-player-container',
  templateUrl: './player-container.component.html',
  styleUrls: ['./player-container.component.scss']
})
export class PlayerContainerComponent implements OnInit {
  public player: boolean;
  public stationError: boolean;

  constructor(public radioService: RadioService) {
  }

  ngOnInit(): void {
    this.radioService.showPlayer.subscribe(value => {
      this.player = value;
    });
    this.radioService.stationErrorChange.subscribe(value => {
      this.stationError = value;
    });
  }
}
