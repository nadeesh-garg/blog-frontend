import { Component, OnInit, Input } from '@angular/core';
import { Blog } from "../blog";

@Component({
  selector: 'app-blog-thumbnail-small',
  templateUrl: './blog-thumbnail-small.component.html',
  styleUrls: ['./blog-thumbnail-small.component.css']
})
export class BlogThumbnailSmallComponent implements OnInit {
 @Input() blog:Blog;
  constructor() { }

  ngOnInit() {
  }

}
