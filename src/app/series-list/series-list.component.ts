import { Component, OnInit, Input } from '@angular/core';
import { Series } from '../series';
import { SeriesService } from '../series.service';
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
  _masonry: Masonry;
  constructor(private seriesservice: SeriesService, private filterpipe: FilterPipe) { }

  ngOnInit() {
    this.getSeriesList();
    
  }
  //TODO: Note that we require to define function that appends slug to address to open series page 
  getSeriesList(): void {
    this.seriesservice.getSeriesList(this.userId)
      .subscribe(series => this.series_all = series);
    //this.series2 = this.series.map(x => Object.assign({}, x));;
    this.seriesservice.getSeriesList(this.userId)
      .subscribe(series => this.series = series);
  }


  onNgMasonryInit($event: Masonry) {
  this._masonry = $event;
}

  appendItems() {
  if (this._masonry) { // Check if Masonry instance exists
    this._masonry.setAddStatus('append'); // set status to 'append'
    this.series.push(...this.series_added); // some grid items: items
    }
  }
  //values = '';
  //TODO: make function to return indices of series - series_current and using ng-masonry-grid-items-index remove element
  //TODO: make function to return in series_added series_current - series
  elements_add(): void {
    this.series_added = this.series_current.filter(item => this.series.indexOf(item) < 0);
    this.appendItems();
  }
  elements_remove(): void {
    this.series_removed = this.series.filter(item => this.series_current.indexOf(item) < 0);
    if(this.series_removed.length > 0 && ! this.series_removed === undefined){
      this.series_removed.forEach(function(item){
                       let i = this.series.indexOf(item);
                       let elemId = 'masonry-item-${i}';
                       if(i>-1){
                         if(this._masonry) {
                           var elem = document.getElementById(elemId);
                           this._masonry.remove(elem);  //Remove object by attribute ID
                         }
                         this.series.splice(i, 1);
                       }
      });
    }
  }

  editBlogList(value): void {
    this.series_current = this.filterpipe.transform(this.series_all, value);
    console.log("DEBUG", this.series_current);
  }
  onKey(value: string){
     //this.values += value + ' | ';
     //this.series.transform(this.series, value)
     this.editBlogList(value);
     this.elements_remove();
     this.elements_add();
     this.series2 = Object.assign([], this.series); 
     this._masonry.layout();
     this.series = Object.assign([], this.series_current);
  }

	mess = "Hi Sexy Series"

  

formatDate(date): Date{
          var dateOut = new Date(date);
          return dateOut;
    };
}