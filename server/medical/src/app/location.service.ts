import { Injectable } from '@angular/core';
import { Location } from './location';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LocationService{
	private locationsUrl = 'api/locations';

	constructor(private http: Http){

	}

	getLocations(): Promise<Location[]> {
		return this.http.get(this.locationsUrl).toPromise().then(response=>response.json().data as Location[]).catch(this.handleError);

	}

	private handleError(error: any): Promise<any>{
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}