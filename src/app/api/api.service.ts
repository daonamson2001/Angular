import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Movie } from '../models/moive/movie.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  apiUrl = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'Application/json'})
  }

  getListMoive():Observable<Movie> {
    return this.http
      .get<Movie>(this.apiUrl + '/movies')
      .pipe(retry(1), catchError(this.handleError))
  }

  getMovieDetail(id: string):Observable<Movie> {
    return this.http
      .get<Movie>(this.apiUrl + '/movies/' + id)
      .pipe(retry(1), catchError(this.handleError))
  }

  updateMovie(id:number, movie:Movie):Observable<Movie> {
    return this.http
      .put<Movie>(
        this.apiUrl + '/movies/' + id,
        JSON.stringify(movie),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError))
  }

  deleteMovie(id:number):Observable<Movie>
  {
    return this.http
      .delete<Movie>(
        this.apiUrl + '/movies/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError))
  }

  createMovie(movie: Movie):Observable<Movie>
  {
    return this.http
      .post<Movie>(
        this.apiUrl + '/movies',
        JSON.stringify(movie),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError))
  }

  handleError(error: ErrorEvent)
  {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent)
    {
      errorMessage = error.error.message;
    } else
    {
      errorMessage = `Error code: ${error}\nMessage: ${error.message}`;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
