import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { reducers, effects } from './store';

import {WeatherService} from './weather.service';
import {SearchComponent} from './components/search/search.component';
import {ResultComponent} from './components/result/result.component';
import {WeatherComponent} from './weather.component';



// IF YOU DECIDE TO USE NG-RX YOU'LL NEED TO UNCOMMENT SOME LINES
// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import { reducers, effects } from './store';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('weather', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [
    SearchComponent,
    ResultComponent,
    WeatherComponent,
  ],
  providers: [
    WeatherService
  ]
})
export class WeatherModule { }
