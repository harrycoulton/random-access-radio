import { Component } from '@angular/core';
import {RadioService} from '../../services/radio.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(public radioService: RadioService) { }
}
