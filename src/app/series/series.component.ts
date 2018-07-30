import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
	seriesreceived: Promise<boolean>;
  series: Series;
  	constructor(
  		private route: ActivatedRoute,
  		private router: Router,
      private blogservice: BlogService,
  		private location: Location,
  		private seriesservice: SeriesService) { }

  	ngOnInit() {
  	  const slug = this.route.snapshot.paramMap.get('id');
   	  this.seriesservice.getSeries(slug).subscribe(item => {
         if(item===undefined){
         this.router.navigate(['/not-found']);
         }
         this.series = item;
         this.seriesreceived = Promise.resolve(true);

       });
    }

}
