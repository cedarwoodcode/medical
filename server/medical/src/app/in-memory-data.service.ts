import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
	createDb(){
		const locations = [
			{id:0, name:'Zero'},
			{id:11, name:'过道'},
			{id:12, name:'医务室'},
			{id:13, name:'电梯'}
		];

		return { locations };

	}
}