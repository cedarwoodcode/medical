import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';


import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { LocationSearchService } from './location-search.service';
import { Location } from './Location';

@Component({
	selector: 'location-search',
	templateUrl: './location-search.component.html',
	styleUrls: ['./location-search.component.css'],
	providers: [LocationSearchService]
}) 


export class LocationSearchComponent implements OnInit{
	locations: Observable<Location[]>;
	private searchTerms = new Subject<string>();

	constructor(private locationSearchService: LocationSearchService, private router: Router){

	}

	search(term: string): void{
		this.searchTerms.next(term);
	}

	ngOnInit(): void{
		this.locations = this.searchTerms.debounceTime(300).distinctUntilChanged().switchMap(term=> term? this.locationSearchService.search(term): Observable.of<Location[]>([])).catch(error => {
			console.log(error);
			return Observable.of<Location[]>([]);
		});
	}

	gotoDetail(location: Location): void{
		let link = ['/detail', location.id];
		this.router.navigate(link);

	}

}