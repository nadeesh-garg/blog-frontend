import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';
import { Global } from '../globals';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	private profile: Profile;
	constructor(
		private route: ActivatedRoute,
    private router: Router,
  		private profileservice: ProfileService,
  		private location: Location,
  		) { }

	ngOnInit() {
		this.getProfile();
	}


	getProfile(): void {
  	const id = ""+this.route.snapshot.paramMap.get('id');
  	console.log("getProfile")
   	this.profileservice.getProfile(id).subscribe(item => {
         if(item===undefined){
         this.router.navigate(['/not-found']);
         }
         this.profile = item;
         this.displaycontentHTML(item.bio_full);
         });
	}

  displaycontentHTML(content:string): void {
       var elem = document.getElementById('blogbody');
       var str = content;
       var re = "\/media";
       elem.innerHTML = str.replace(/\/media/g, Global.BACKEND_URL+re);
   }
}
