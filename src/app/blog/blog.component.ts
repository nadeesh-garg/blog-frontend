import { Component, OnInit, Pipe, PipeTransform, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
isModalOpen=false;
blogrecvd: Promise<boolean>;
//blogindexes: BlogIndex[];
//blogselect: BlogIndex[];
  constructor(
  		private route: ActivatedRoute,
      private router: Router,
  		private blogservice: BlogService,
  		private location: Location,
  		//private blogindexservice: BlogindexService
  		) { }

  ngOnInit() {
  this.getBlogIndexList(); 
  //this.getSlug();	
  //setTimeout(()=>{    //<<<---    using ()=> syntax
 //}, 2000)

  }  

  
   getBlogIndexList(): void {
  	const slug = this.route.snapshot.paramMap.get('id');
   	//	console.log("ifBlock getBlogIndexList")

   	this.blogservice.getBlog(slug).subscribe(item =>{
      if(item===undefined){
         this.router.navigate(['/not-found']);
      }
   		this.blog = item;
      this.isModalOpen=false;
      this.blogrecvd=Promise.resolve(true);
      this.displaycontentHTML(item.content);
      console.log("DEBUG", item);
       //elem.innerHTcloseByClickingOutside?: boolean;ML = ;    
  });
   }

   displaycontentHTML(content:string): void {
       var elem = document.getElementById('blogbody');
       var str = content;
       var re = "\/media";
       elem.innerHTML = str.replace(/\/media/g, Global.BACKEND_URL+re);
   }

}
//Threads are added to back of queue as javascript executes task after task
