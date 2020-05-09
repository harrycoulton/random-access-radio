import { Component, OnInit } from '@angular/core';
import {RadioService} from '../../services/radio.service';

@Component({
  selector: 'app-search-failed',
  templateUrl: './search-failed.component.html',
  styleUrls: ['./search-failed.component.scss']
})
export class SearchFailedComponent implements OnInit {
  public genrelist = [
    'ambient',
    'african',
    'acid jazz',
    'baroque',
    'balkan',
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
    'gabber',
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
    'techno',
    'tekno',
    'world'
  ];
  public randomList = [];

  constructor(private radioService: RadioService) { }

  ngOnInit(): void {
    this.randomGenres();
  }

  public randomGenres = () => {
    for (let i = 0; i < 5; i++){
      this.randomList.push(this.radioService.randomArrayItem(this.genrelist));
    }
  }

  public prepSearch = (searchTerm) => {
    this.radioService.currentSearchTerm = searchTerm;
    this.radioService.searchTermChange.next(searchTerm);
  }

}
