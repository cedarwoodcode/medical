import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { LocationsComponent } from './locations.component';
import { LocationDetailComponent } from './location-detail.component';
import { DashboardComponent } from './dashboard.component';
import { LocationService } from './location.service';


@NgModule({
  declarations: [
    LocationsComponent,
    LocationDetailComponent,
    DashboardComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([{
      path:"locations",
      component: LocationsComponent
    }, {
      path: 'dashboard',
      component: DashboardComponent
    }, {
      path:'',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }])
  ],
  exports: [RouterModule],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
