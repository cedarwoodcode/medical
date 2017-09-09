import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Location } from './Location'

@Injectable()
export class LocationSearchService{
	
	constructor(private http: Http){

	}

	search(term: string): Observable<Location[]>{
		return this.http.get(`api/locations/?name=${term}`).map(response => response.json().data as Location[]);

	}
}