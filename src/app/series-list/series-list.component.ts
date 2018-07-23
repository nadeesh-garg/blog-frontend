import { Component, OnInit, Input } from '@angular/core';
import { Series } from '../series';
import { Blog } from '../blog';
import { SeriesService } from '../series.service';
import { BlogService } from '../blog.service';
import { FilterPipe } from '../filter.pipe';
import { FormsModule } from '@angular/forms';
import { Masonry, MasonryGridItem } from 'ng-masonry-grid'; // import necessary datatypes

@Component({
  selector: 'app-series-list', /* This is to be used to get grid box in place*/
  templateUrl: './series-list.component.html', 
  styleUrls: ['./series-list.component.css'],
})

export class SeriesListComponent implements OnInit{
  @Input() userId: number;
  series: Series[];
  series2: Series[];
  series_all: Series[];
  series_current: Series[];
  series_added:Series[];
  series_removed:Series[];
  lasthover: number;
  currenthover: number;
  slugsearch: string;
  toshowarrow: boolean[];
  toshowblogs: boolean[];
  lastblogs: number;
  blogofseries: Blog[];
  constructor(private seriesservice: SeriesService, private filterpipe: FilterPipe, private blogservice:BlogService) { }
  loaded:Promise<boolean>;
  ngOnInit() {    
    this.getSeriesList();
  }
  //TODO: Remove Masonry and use full grids 
  getSeriesList(): void {
    this.seriesservice.getSeriesList(this.userId)
      .subscribe(series => {
        this.series_all = series;
        this.series = series;
        (this.toshowarrow = []).length = series.length;
        this.toshowarrow.fill(false);
        (this.toshowblogs = []).length = series.length;
        this.toshowblogs.fill(false);
        this.loaded=Promise.resolve(true)
      });
    //this.series2 = this.series.map(x => Object.assign({}, x));;
  }

  appendItems() {
    this.series.push(...this.series_added); // some grid items: items
  }
  //values = '';
  //TODO: make function to return indices of series - series_current and using ng-masonry-grid-items-index remove element
  //TODO: make function to return in series_added series_current - series
  elements_add(): void {
    this.series_added = this.series_current.filter(item => this.series.indexOf(item) < 0 && this.series_all.indexOf(item) > 0);
    this.appendItems();
  }
  elements_remove(): void {
    this.series_removed = this.series.filter(item => this.series_current.indexOf(item) < 0 && this.series_all.indexOf(item) > 0);
    if(this.series_removed.length > 0 && ! this.series_removed === undefined){
      this.series_removed.forEach(function(item){
                       let i = this.series.indexOf(item);
                       let elemId = 'series-item-${i}';
                       if(i>-1){
                          var elem = document.getElementById(elemId);
                           elem.innerHTML='';  //Remove object by attribute ID
                         this.series.splice(i, 1);
                       }
      });
    }
  }

  editSeriesList(value): void {
    this.series_current = this.filterpipe.transform(this.series_all, value);
    console.log("DEBUG", this.series_current);
  }
  onKey(value: string){
     //this.values += value + ' | ';
     //this.series.transform(this.series, value)
     this.editSeriesList(value);
     this.elements_remove();
     this.elements_add();
     this.series2 = Object.assign([], this.series); 
     this.series = Object.assign([], this.series_current);
  }

	mess = "Hi Sexy Series"

  hoverover(seriesselect:Series, hoverindex: number): void{
    this.toshowarrow[this.lasthover]=false
    this.slugsearch=seriesselect.slug;
    console.log("SLUG "+this.slugsearch);
    if(this.toshowblogs[hoverindex]!=true){
      this.toshowarrow[hoverindex]=true;
  }
    this.lasthover=hoverindex;
  }
  click_arrow_down(i: number): void {
    if(this.lastblogs!=undefined){
      this.toshowblogs[this.lastblogs]=false;
    }
    this.blogservice.getBlogs(this.series[i].slug).subscribe(blogs => {
      this.blogofseries=blogs;
      });
    console.log(this.blogofseries);
    this.toshowblogs[i]=true;
    this.toshowarrow[i]=false;
    this.lastblogs=i;

  }
  click_arrow_up(i: number): void {
    this.toshowblogs[i]=false;
    this.toshowarrow[i]=true;
    this.lastblogs=i;
  }
  

formatDate(date): Date{
          var dateOut = new Date(date);
          return dateOut;
    };
}