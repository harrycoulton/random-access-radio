import { Component, OnInit } from '@angular/core';
import {RadioService} from '../../services/radio.service';

@Component({
  selector: 'app-session-info',
  templateUrl: './session-info.component.html',
  styleUrls: ['./session-info.component.scss']
})
export class SessionInfoComponent implements OnInit {
  public sessionList = [];

  constructor(public radioService: RadioService) {
  }

  ngOnInit(): void {
    this.radioService.sessionListChange.subscribe(value => {
      this.sessionList = value;
    });
  }

}
