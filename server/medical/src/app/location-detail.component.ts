import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from './location';
import { LocationService } from './location.service'
import { Location as SystemLocation } from '@angular/common';

@Component({
	selector:'location-detail',
	templateUrl: './location.detail.component.html',
	styleUrls: ['./location-detail.component.css'],
})

export class LocationDetailComponent implements OnInit{
	@Input() location: Location;

 	constructor(private locationService: LocationService, private systemLocation: SystemLocation, private route: ActivatedRoute){
   	
  	}

	save(): void{
		this.locationService.update(this.location).then(()=>this.goBack());
	}
	
	ngOnInit(): void {
    	this.route.paramMap.switchMap((params: ParamMap) => this.locationService.getLocation(+params.get('id')))
      		.subscribe(location => this.location = location);
  	}


  	goBack(): void{
  		this.systemLocation.back();

  	}
}