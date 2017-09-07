import { Component, OnInit } from '@angular/core';
import { Location } from './location';
import { LocationService } from './location.service';

@Component({
  selector: 'my-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./app.component.css']
})

export class LocationsComponent implements OnInit{
  title = '位置管理';
  selectedLocation: Location;
  locations: Location[];

  constructor(private locationService: LocationService){
   
  }

  getLocations(): void{
    this.locationService.getLocations().then(locations=>this.locations=locations);
  
  }

  ngOnInit(): void{
    this.getLocations();
  }

  onSelect(location: Location): void{
  	this.selectedLocation = location;
  }
} ;
