import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './messages.service';
import { BlogService } from './blog.service';
import { BlogindexService } from './blogindex.service';
import { HttpClientModule } from '@angular/common/http';
import { NgMasonryGridModule } from 'ng-masonry-grid'; 
import { FilterPipe } from './filter.pipe';
import { BlogComponent } from './blog/blog.component';
import { AppRoutingModule } from './/app-routing.module';
import { SeriesComponent } from './series/series.component';
import { ProfileComponent } from './profile/profile.component'
import { SeriesService } from './series.service';
import { SeriesListComponent } from './series-list/series-list.component';
import { ProfileService } from './profile.service';
import { Global } from './globals';
import { Modal } from './blog/myModal.component';
import { BlogThumbnailComponent } from './blog-thumbnail/blog-thumbnail.component';
import { SeriesThumbnailComponent } from './series-thumbnail/series-thumbnail.component';
import { ProfileSummaryComponent } from './profile-summary/profile-summary.component';
import { BlogThumbnailSmallComponent } from './blog-thumbnail-small/blog-thumbnail-small.component';
import { TeamComponent } from './team/team.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminRedirectComponent } from './admin-redirect/admin-redirect.component';
import { HomeComponent } from './home/home.component';


//TODO: Find and store blog-list etc. 
@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    MessagesComponent,
    BlogComponent,
    SeriesComponent,
    ProfileComponent,
    SeriesListComponent,
    Modal,
    BlogThumbnailComponent,
    SeriesThumbnailComponent,
    ProfileSummaryComponent,
    BlogThumbnailSmallComponent,
    TeamComponent,
    NotFoundComponent,    //FilterPipe
    AdminRedirectComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgMasonryGridModule,
    AppRoutingModule,
    ],
  providers: [MessagesService, 
              BlogService, 
              FilterPipe, 
              BlogindexService, 
              SeriesService, 
              ProfileService, 
              Global,
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
