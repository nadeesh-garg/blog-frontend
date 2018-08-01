import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject ,  Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Response } from '@angular/http';
import { BlogIndex } from './BlogIndex';
import { MessagesService } from './messages.service';
import { Global } from './globals';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BlogindexService {
	private blogindexurl = Global.BACKEND_URL+'/api/all-blogs';
  	public blogWorld: BlogIndex[];
  	//private tempVar: any;
  	constructor(private http: HttpClient,
  				private messageService: MessagesService) {}

  	private log(message: string) {
  		this.messageService.add('BlogService:' + message);
	}

	getBlogIndex(): Observable<BlogIndex[]> {
  	return(this.http.get<BlogIndex[]>(this.blogindexurl)
  	.pipe(
  		tap(_ => console.log('fetched blogsindex')), 
  		catchError(this.handleError('getBlogIndex', []))
  		));
	
  }
  /*
  	getBlogAddressList(): BlogIndex[] {
  		if(this.blogWorld != null){
  			//this.getBlogIndexList();
  			console.log("getBlogAddressList() if block");
  			console.log(this.blogWorld)
  			return(this.blogWorld)
  		}
  		else
  		{
  			console.log("getBlogAddressList() else block");
  			console.log(this.blogWorld)	
  			return([])	
  		}
  	}

  	getBlogIndexList(): void {
  		this.getBlogIndex().subscribe(item => { 
  			console.log("getBlogIndexList");
  			console.log(item);
  			this.blogWorld = item;
  			});
  	}

	saveGlobalIndex(value: any): void {
		this.blogWorld = value;
		console.log("SaveGlobalIndex");
		console.log(this.blogWorld);
	}  	*/
	private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
