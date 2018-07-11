import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';
import { Global } from './globals';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Response } from '@angular/http';
import { Blog } from './blog';
import { MessagesService } from './messages.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BlogService {
  //TODO: Find where to place this.blogservice.getBlogAddresses(); Make globally available dictionary 
	private bloglisturl = Global.BACKEND_URL +'/api/blogs/';
  private blogurl = Global.BACKEND_URL+'/api/blog/';
  
  	constructor(private http: HttpClient,
  				private messageService: MessagesService) { }

  	private log(message: string) {
  		this.messageService.add('BlogService: ' + message);
	}


  getBlogs(seriesslug?: string, userId?: number): Observable<Blog[]> {
    let myParams = new HttpParams().set('seriesslug', seriesslug).append('userId': ''+userId);
    //console.log(myParams);
   	return this.http.get<Blog[]>(this.bloglisturl, {headers: httpOptions.headers, params: myParams})
  	.pipe(
  		tap(blogs => this.log('fetched blogs')), 
  		catchError(this.handleError('getBlogs', []))
  		);
  }

  /** GET Blog by id. Will 404 if id not found */
	getBlog(slug: string): Observable<Blog> {
	  const url = `${this.blogurl}${slug}`;
	  return this.http.get<Blog>(url).pipe(
	    tap(_ => this.log(`fetched blog id=${slug}`)),
	    catchError(this.handleError<Blog>(`getBlog id=${slug}`))
	  );
	}

  getBlogfromId(id: number): Observable<Blog> {
    const url = `${this.bloglisturl}${id}`;
    return this.http.get<Blog>(url).pipe(
      tap(_ => this.log(`fetched blog id=${id}`)),
      catchError(this.handleError<Blog>(`getBlog id=${id}`))
    );
  }


  updateBlog(blog: Blog): Observable<any> {
    return this.http.put(this.blogurl, blog, httpOptions).pipe(
      tap(_ => this.log('updated blog id = ${blog.id}')),
      catchError(this.handleError<any>('updateBlog'))
      );
  }


  	private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  

}
