import {Component, OnInit} from '@angular/core';
import {RadioService} from '../../services/radio/radio.service';
import {TagsService} from '../../services/tags/tags.service';
import {TagsConfig} from '../../services/tags/tags.config';

@Component({
  selector: 'app-search-failed',
  templateUrl: './search-failed.component.html',
  styleUrls: ['./search-failed.component.scss']
})
export class SearchFailedComponent implements OnInit {
  public randomList = [];

  constructor(public radioService: RadioService, private tagsService: TagsService) { }

  ngOnInit(): void {
    this.tagsService.getTags();
    this.tagsService.tagsListUpdate.subscribe(value => {
      this.randomList = value;
    });
  }

  public prepSearch = (searchTerm) => {
    this.radioService.currentSearchTerm = searchTerm;
    this.radioService.searchTermChange.next(searchTerm);
  }

}
