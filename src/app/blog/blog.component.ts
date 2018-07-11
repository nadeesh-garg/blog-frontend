import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Blog } from '../blog';
import { BlogService }  from '../blog.service';
import { BlogIndex } from '../BlogIndex';
import { Global } from '../globals';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
blog: Blog;
//blogindexes: BlogIndex[];
//blogselect: BlogIndex[];
  constructor(
  		private route: ActivatedRoute,
  		private blogservice: BlogService,
  		private location: Location,
  		//private blogindexservice: BlogindexService
  		) { }

  ngOnInit() {
	this.getBlogIndexList(); 
	//this.getSlug();	
  }

   getBlogIndexList(): void {
  	const slug = this.route.snapshot.paramMap.get('id');
   		console.log("ifBlock getBlogIndexList")
   	this.blogservice.getBlog(slug).subscribe(item =>{
   		this.blog = item;
   		var elem = document.getElementById('blogbody');
   		var str = this.blog.content;
   		var re = "\/media";
   		elem.innerHTML = str.replace(re, Global.BACKEND_URL+re);
   		//console.log();
   		//elem.innerHTML = ;		
	});

   }
}
