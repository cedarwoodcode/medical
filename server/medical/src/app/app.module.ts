import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
    ReactiveFormsModule,
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
