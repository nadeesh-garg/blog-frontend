import { User } from './user';

export class Profile {
	constructor(
	public url: string,
	public pen_name: string,
	public bio: string,
	public birth_date: string,
	public user: User
	) { }
}