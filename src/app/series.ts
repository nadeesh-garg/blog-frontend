import { Profile } from './profile';
 
export class Series {
	constructor(
	public id: number,
	public title: string,
	public url: string,
	public genre: string,
	public creator: Profile,
	public create_date: string,
	public slug: string,
	public image: string
	) { }
}