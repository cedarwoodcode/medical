import {Component, Input} from '@angular/core';
import {Location} from './location';

@Component({
	selector:'location-detail',
	templateUrl: './location.detail.component.html',
})

export class LocationDetailComponent{
	@Input() location: Location;

}