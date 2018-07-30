import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog/blog.component';
import { SeriesComponent } from './series/series.component'
import { SeriesListComponent } from './series-list/series-list.component'
import { ProfileComponent } from './profile/profile.component';
import { TeamComponent } from './team/team.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminRedirectComponent } from './admin-redirect/admin-redirect.component';
import { Global } from './globals'; 
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent },
  { path: 'blogs', component: BlogListComponent },
  { path: 'blogs/:id', component: BlogComponent },
  { path: 'series', component: SeriesListComponent },
  { path: 'series/:id', component: SeriesComponent },
  { path: 'user/:id', component: ProfileComponent },
  { path: 'team', component: TeamComponent },
  { path: 'admin', component:AdminRedirectComponent},
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },  

];

@NgModule({
	
	imports: [ RouterModule.forRoot(routes) ],
  	exports: [ RouterModule ]
})
export class AppRoutingModule { }
