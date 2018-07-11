import { SeriesIndex } from './SeriesIndex'
export class BlogIndex{
	constructor(
	public id: number,
	public title: string,
	public slug: string,
	public series: SeriesIndex
	) { }
}