import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../blog';

@Component({
  selector: 'app-blog-thumbnail',
  templateUrl: './blog-thumbnail.component.html',
  styleUrls: ['../blog-list/blog-list.component.css']
})
export class BlogThumbnailComponent implements OnInit {
  @Input() blog:Blog;
  constructor() { }

  ngOnInit() {
  }

}
