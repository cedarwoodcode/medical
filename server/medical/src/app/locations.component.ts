import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Location } from './location';
import { LocationService } from './location.service';

@Component({
  selector: 'my-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})

export class LocationsComponent implements OnInit{
  title = '位置管理';
  selectedLocation: Location;
  locations: Location[];

  constructor(private locationService: LocationService, private router: Router){
   
  }

  getLocations(): void{
    this.locationService.getLocations().then(locations=>this.locations=locations);
  
  }

  add(name: string): void{
    name = name.trim();
    if(!name){
      return;
    }

    this.locationService.create(name).then(location=> {
      this.locations.push(location);
      this.selectedLocation = null;

    })

  }

  delete(location: Location): void{
    console.log(location.id);
    this.locationService.delete(location.id).then( () => {
      this.locations = this.locations.filter( l => l !== location );
      if (this.selectedLocation === location ) {
        this.selectedLocation = null;

      }
    });
  }

  ngOnInit(): void{
    this.getLocations();
  }

  onSelect(location: Location): void{
  	this.locationService.getLocation(location.id).then(location => this.selectedLocation = location);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedLocation.id]);
  }
} ;
