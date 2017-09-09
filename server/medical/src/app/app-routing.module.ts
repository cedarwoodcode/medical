import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationsComponent } from './locations.component';
import { LocationDetailComponent } from './location-detail.component';
import { DashboardComponent } from './dashboard.component';
import { LocationSearchComponent } from './location-search.component'


const routes: Routes = [{
      path:"locations",
      component: LocationsComponent
    }, {
      path: 'dashboard',
      component: DashboardComponent
    }, {
      path:'',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: 'detail/:id',
      component: LocationDetailComponent
    }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
	
}
