import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog/blog.component';
import { SeriesComponent } from './series/series.component'
import { SeriesListComponent } from './series-list/series-list.component'
import { ProfileComponent } from './profile/profile.component';
 

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'blogs', component: BlogListComponent },
  { path: 'blogs/:id', component: BlogComponent },
  { path: 'series', component: SeriesListComponent },
  { path: 'series/:id', component: SeriesComponent },
  { path: 'user/:id', component: ProfileComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  	exports: [ RouterModule ]
})
export class AppRoutingModule { }
