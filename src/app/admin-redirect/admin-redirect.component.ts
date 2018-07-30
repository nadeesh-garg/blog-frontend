import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Global } from '../globals';

@Component({
  selector: 'app-admin-redirect',
  templateUrl: './admin-redirect.component.html',
  styleUrls: ['./admin-redirect.component.css']
})
export class AdminRedirectComponent implements OnInit {

  constructor(private route: ActivatedRoute, @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
  	this.goToUrl()
  }

  goToUrl(): void {
    this.document.location.href = Global.BACKEND_URL+'/admin';
}
}