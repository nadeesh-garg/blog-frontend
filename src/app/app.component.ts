import { Component, OnInit } from '@angular/core';
import { BlogindexService } from './blogindex.service';
import { BlogIndex } from './BlogIndex';
import { Router,
		 ActivatedRoute,
  		 Event as RouterEvent,
  		 NavigationStart,
  		 NavigationEnd,
  		 NavigationCancel,
  		 NavigationError } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
	//NOTE: The three given lists are very important to have an equal number of elements with text, links and image respectivel 
 menu_options = ['Blogs', 'Series', 'Team', 'Home'];
 link_options = [ '/blogs', '/series', '/team', '/home']
 image_options = ['image-blog', 'image-series', 'image-team', 'image-home']
 loading = true;
 selectedid=-1;
 selectedimage='image-home';

  constructor(private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
	  this.selectedid = this.link_options.indexOf(this.router.url);
	  this.selectedimage = this.image_options[this.selectedid];	
      console.log(this.selectedid,"Current URL");
    })
  }
  navbar_clicked(i:number): void {
  	//TODO: On clicking navbar, add css class to element after removing from previous; 
  	//Also change background-image given each menu option. 
  	this.selectedid = i;
	this.selectedimage = this.image_options[i];	
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true
    }
    if (event instanceof NavigationEnd) {
      this.loading = false
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false
    }
    if (event instanceof NavigationError) {
      this.loading = false
    }
  }
}
