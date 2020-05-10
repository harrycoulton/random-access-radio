import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {TagsModel} from '../../models/tags.model';
import {TagsConfig} from './tags.config';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  public tagsList: TagsModel[];
  public tagsListUpdate: BehaviorSubject<TagsModel[]> = new BehaviorSubject<TagsModel[]>(this.tagsList);

  constructor(private http: HttpClient, private tagsConfig: TagsConfig) { }

  public getTags = async () => {
    this.http.get('https://fr1.api.radio-browser.info/json/tags')
      .subscribe(data => {
        this.tagsList = this.randomGenres(data);
        this.tagsListUpdate.next(this.tagsList);
      },
        error => {
          this.tagsListUpdate.next(
            this.tagsConfig.sampleTags.map(item => (
              {
                name: item,
                stationcount: 4
              }
            ))
          );
        });
  }

  public randomGenres = (array) => {
    const randomList = [];
    for (let i = 0; i < 10; i){
      const randomItem = this.randomArrayItem(array);
      if (randomItem.stationcount >= 3){
        randomList.push(randomItem);
        i++;
      }
    }
    return randomList;
  }
  public randomArrayItem = (array) => {
    const randomArrayInt = (Math.floor(Math.random() * Math.floor(array.length)));
    return array[randomArrayInt];
  }
}
