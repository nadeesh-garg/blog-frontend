import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Global } from './globals';
import { Observable } from 'rxjs/Observable';

import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Response } from '@angular/http';
import { Series } from './series';
import { MessagesService } from './messages.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SeriesService {
  private seriesurl = 'http://localhost:8000/api/series/';
  
  	constructor(private http: HttpClient,
  				private messageService: MessagesService) { }

  	private log(message: string) {
  		this.messageService.add('SeriesService: ' + message);
	}


  getSeriesList(userId?: number): Observable<Series[]> {
  	let myParams = new HttpParams().set('userId', ''+userId);
  	return this.http.get<Series[]>(this.seriesurl)
  	.pipe(
  		tap(series => this.log('fetched series')), 
  		catchError(this.handleError('getSeries', []))
  		);
  }

  /** GET Series by id. Will 404 if id not found */
	getSeries(slug: string): Observable<Series> {
	  const url = `${this.seriesurl}${slug}`;
	  console.log("URL = " + url);
	  return this.http.get<Series>(url).pipe(
	    tap(_ => this.log(`fetched Series id=${slug}`)),
	    catchError(this.handleError<Series>(`getSeries slug=${slug}`))
	  );
	}


  updateSeries(series: Series): Observable<any> {
    return this.http.put(this.seriesurl, series, httpOptions).pipe(
      tap(_ => this.log('updated series id = ${series.id}')),
      catchError(this.handleError<any>('updateSeries'))
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
