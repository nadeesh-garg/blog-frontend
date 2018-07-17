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
import { SeriesThumbnailComponent } from './series-thumbnail/series-thumbnail.component'


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
    SeriesThumbnailComponent    //FilterPipe
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
              Global],
  bootstrap: [AppComponent]
})
export class AppModule { }
