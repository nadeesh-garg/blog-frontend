import { Profile } from './profile';

export class Blog{
	constructor(
	public id: number,
	public title: string,
	public url: string,
	public welcome_image: string,
	public author: Profile,
	public folder: string,
	public description: string,
	public hidden_message: string,
	public publishable: boolean,
	public slug: string,
	public create_date: string,
	public pub_date: string,
	public content: string,
	public tags: any,
	) { }
}