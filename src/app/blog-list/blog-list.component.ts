import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';
import { FilterPipe } from '../filter.pipe';
import { FormsModule } from '@angular/forms';
import { Masonry, MasonryGridItem } from 'ng-masonry-grid'; // import necessary datatypes
import { BlogIndex } from '../BlogIndex';
import { BlogindexService } from '../blogindex.service';

@Component({
  selector: 'app-blog-list', /* This is to be used to get grid box in place*/
  templateUrl: './blog-list.component.html', 
  styleUrls: ['./blog-list.component.css'],
  })

export class BlogListComponent implements OnInit{
  @Input() seriesslug: string;
  @Input() userId: number;
  blogs: Blog[];
  blogs2: Blog[];
  blogs_all: Blog[];
  blogs_current: Blog[];
  blogs_added:Blog[];
  blogs_removed:Blog[];
  blogindexes: BlogIndex[];
  _masonry: Masonry;
  constructor(private blogservice: BlogService, private filterpipe: FilterPipe, private blogindexservice: BlogindexService) { }

  ngOnInit() {
    this.getBlogList();
    
  }
  //TODO: Note that we require to define function that appends slug to address to open blog page 
  getBlogList(): void {
    this.blogservice.getBlogs(this.seriesslug)
      .subscribe(blogs => this.blogs_all = blogs);
    //this.blogs2 = this.blogs.map(x => Object.assign({}, x));;
    this.blogservice.getBlogs(this.seriesslug)
      .subscribe(blogs => this.blogs = blogs);
  }
  getBlogIndexList(): void {
    this.blogindexservice.getBlogIndex().subscribe(item => { 
        console.log("Madarchod");
        console.log(item);
        this.blogindexes = item;
        });
  }


  onNgMasonryInit($event: Masonry) {
  this._masonry = $event;
}

  appendItems() {
  if (this._masonry) { // Check if Masonry instance exists
    this._masonry.setAddStatus('append'); // set status to 'append'
    this.blogs.push(...this.blogs_added); // some grid items: items
    }
  }
  //values = '';
  //TODO: make function to return indices of blogs - blogs_current and using ng-masonry-grid-items-index remove element
  //TODO: make function to return in blogs_added blogs_current - blogs
  elements_add(): void {
    this.blogs_added = this.blogs_current.filter(item => this.blogs.indexOf(item) < 0);
    this.appendItems();
  }
  elements_remove(): void {
    this.blogs_removed = this.blogs.filter(item => this.blogs_current.indexOf(item) < 0);
    if(this.blogs_removed.length > 0 && ! this.blogs_removed === undefined){
      this.blogs_removed.forEach(function(item){
                       let i = this.blogs.indexOf(item);
                       let elemId = 'masonry-item-${i}';
                       if(i>-1){
                         if(this._masonry) {
                           var elem = document.getElementById(elemId);
                           this._masonry.remove(elem);  //Remove object by attribute ID
                         }
                         this.blogs.splice(i, 1);
                       }
      });
    }
  }

  editBlogList(value): void {
    this.blogs_current = this.filterpipe.transform(this.blogs_all, value);
    console.log("DEBUG", this.blogs_current);
  }
  onKey(value: string){
     //this.values += value + ' | ';
     //this.blogs.transform(this.blogs, value)
     this.editBlogList(value);
     this.elements_remove();
     this.elements_add();
     this.blogs2 = Object.assign([], this.blogs); 
     this._masonry.layout();
     this.blogs = Object.assign([], this.blogs_current);
  }

	mess = "Hi Sexy"

  }

this.formatDate = function(date){
          var dateOut = new Date(date);
          return dateOut;
    };