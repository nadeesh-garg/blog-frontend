import { User } from './user';

export class Profile {
	constructor(
	public url: string,
	public pen_name: string,
	public bio_summary: string,
	public bio_full:string,
	public image: string,
	public birth_date: string,
	public slug: string,
	public user: User
	) { }
}