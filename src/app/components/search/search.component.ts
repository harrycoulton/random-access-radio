import {Component, OnInit} from '@angular/core';
import {RadioService} from '../../services/radio.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  public search: string;

  constructor(public radioService: RadioService) { }

  ngOnInit(): void {
    this.radioService.searchTermChange.subscribe(value => {
      this.search = value;
    });
  }
}
