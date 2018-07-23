import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
 
import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Response } from '@angular/http';
import { Profile } from './profile';
import { MessagesService } from './messages.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProfileService {
  private profileurl = 'http://localhost:8000/api/profiles/';
  
  	constructor(private http: HttpClient,
  				private messageService: MessagesService) { }

  	private log(message: string) {
  		this.messageService.add('SeriesService: ' + message);
	}


  getProfiles(): Observable<Profile[]> {
  	return this.http.get<Profile[]>(this.profileurl)
  	.pipe(
  		tap(series => this.log('fetched profiles')), 
  		catchError(this.handleError('getProfiles', []))
  		);
  }

  /** GET Series by id. Will 404 if id not found */
	getProfile(id: any): Observable<Profile> {
	  const url = `${this.profileurl}${id}`;
	  console.log("URL = " + url);
	  return this.http.get<Profile>(url).pipe(
	    tap(_ => this.log(`fetched Profile id=${id}`)),
	    catchError(this.handleError<Profile>(`Error getProfile id=${id}`))
	  );
	}


  updateSeries(profile: Profile): Observable<any> {
    return this.http.put(this.profileurl, profile, httpOptions).pipe(
      tap(_ => this.log('updated series id = ${profile.id}')),
      catchError(this.handleError<any>('updateProfile'))
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
