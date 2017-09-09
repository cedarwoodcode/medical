import { Injectable } from '@angular/core';
import { Location } from './location';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LocationService{
	private locationsUrl = 'api/locations';
	private headers = new Headers({
		'Content-Type': 'application/json'
	});


	constructor(private http: Http){

	}

	getLocations(): Promise<Location[]> {
		return this.http.get(this.locationsUrl).toPromise().then(response=>response.json().data as Location[]).catch(this.handleError);

	}

	getLocation(id: number): Promise<Location>{
		const url = `${this.locationsUrl}/${id}`;
		return this.http.get(url).toPromise().then(response=> response.json().data as Location).catch(this.handleError);

	}

  	update(location: Location): Promise<Location>{
    	const url = `${this.locationsUrl}/${location.id}`;
    	return this.http.put(url, JSON.stringify(location), {
    		headers: this.headers
    	}).toPromise().then(()=>location).catch(this.handleError);

  	}

		
	create(name: string): Promise<Location> {
		return this.http.post(this.locationsUrl, JSON.stringify({name: name}), {
			headers: this.headers
		}).toPromise().then(res => res.json().data as Location).catch(this.handleError);

	}

	delete(id: number): Promise<void>{
		const url = `${this.locationsUrl}/${id}`;
		return this.http.delete(url, {headers: this.headers}).toPromise().then(()=> null).catch(this.handleError);

	} 

	private handleError(error: any): Promise<any>{
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

}