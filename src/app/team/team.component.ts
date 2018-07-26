import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  datarecv: Promise<boolean>;
  private profiles: Profile[];
	
  constructor(private profileservice: ProfileService,) { }

  ngOnInit() {
  	  this.profileservice.getProfiles().subscribe(profiles =>{
  		this.profiles = profiles;
  		this.datarecv=Promise.resolve(true);
  		});
    }
}
