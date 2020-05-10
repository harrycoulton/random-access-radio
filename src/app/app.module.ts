import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './components/player/player.component';
import { SearchComponent } from './components/search/search.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SessionInfoComponent } from './components/session-info/session-info.component';
import { PlayerContainerComponent } from './components/player-container/player-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { SearchFailedComponent } from './components/search-failed/search-failed.component';
import { NgMarqueeModule } from 'ng-marquee';
import { HifiComponent } from './components/hifi/hifi.component';
import { TagsConfig } from './services/tags/tags.config';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    SearchComponent,
    SessionInfoComponent,
    PlayerContainerComponent,
    SearchFailedComponent,
    HifiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    NgMarqueeModule
  ],
  providers: [TagsConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
