import { Component, OnInit, Input } from '@angular/core';
import { Series } from '../series';

@Component({
  selector: 'app-series-thumbnail',
  templateUrl: './series-thumbnail.component.html',
  styleUrls: ['../series-list/series-list.component.css']
})
export class SeriesThumbnailComponent implements OnInit {
  @Input() series: Series;
  @Input() arrowtoggle: boolean;
  constructor() { }

  ngOnInit() {
  }

}
