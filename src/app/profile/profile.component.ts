import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	private profile: Profile;
	constructor(
		private route: ActivatedRoute,
  		private profileservice: ProfileService,
  		private location: Location,
  		) { }

	ngOnInit() {
		this.getProfile();
	}


	getProfile(): void {
  	const id = ""+this.route.snapshot.paramMap.get('id');
  	console.log("getProfile")
   	this.profileservice.getProfile(id).subscribe(item => this.profile = item);
	}
}
