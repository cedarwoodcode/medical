import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdListModule } from '@angular/material';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { LocationsComponent } from './locations.component';
import { LocationDetailComponent } from './location-detail.component';
import { DashboardComponent } from './dashboard.component';
import { LocationSearchComponent } from './location-search.component'


import { LocationService } from './location.service';



@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    LocationDetailComponent,
    DashboardComponent,
    LocationSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule, MdListModule
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
