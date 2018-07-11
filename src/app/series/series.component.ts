import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Series } from '../series';
import { SeriesService } from '../series.service';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
	series: Series;
  	constructor(
  		private route: ActivatedRoute,
  		private blogservice: BlogService,
  		private location: Location,
  		private seriesservice: SeriesService) { }

  	ngOnInit() {
  		this.getSeries();
  	}

  	getSeries(): void {
  	const slug = this.route.snapshot.paramMap.get('id');
   	console.log("getSeries")
   	this.seriesservice.getSeries(slug).subscribe(item => this.series = item);
	}
}
