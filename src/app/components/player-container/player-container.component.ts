import { Component, OnInit } from '@angular/core';
import {RadioService} from '../../services/radio.service';
import {StationModel} from '../../models/station.model';

@Component({
  selector: 'app-player-container',
  templateUrl: './player-container.component.html',
  styleUrls: ['./player-container.component.scss']
})
export class PlayerContainerComponent implements OnInit {
  public currentStation: StationModel;
  public genrelist = [
    'ambient',
    'african',
    'acid jazz',
    'baroque',
    'classical',
    'chinese',
    'deathcore',
    'drone',
    'drum and bass',
    'eastern',
    'experimental',
    'fullon',
    'folk',
    'greek',
    'house',
    'harcore',
    'happy hardcore',
    'indian',
    'jungle',
    'krautrock',
    'lofi',
    'metal',
    'neurofunk',
    'oriental',
    'psychedelic',
    'psytrance',
    'random',
    'rain',
    'sleep',
    'world'
  ];
  public randomList = [];

  constructor(public radioService: RadioService) { }

  ngOnInit(): void {
  }

}
