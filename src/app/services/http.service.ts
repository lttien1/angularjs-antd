import { Injectable } from '@angular/core';
import { ServerResponse } from '../interfaces/server-response.interface';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type':  'application/json' }),
};

@Injectable()

export class HttpService {
  constructor(private http: HttpClient) {}

  get(url): Observable<ServerResponse> {
    return this.http.post(url, httpOptions)
      .pipe(
        map(
          (res: ServerResponse) => this.handleResponse(res)
        ),
        catchError(this.handleError)
      );
  }

  post(url, postBody?: any): Observable<any> {
    return this.http.post(url, postBody, httpOptions)
      .pipe(
        map(
          (res: ServerResponse) => this.handleResponse(res)
        ),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  handleResponse(res: ServerResponse) {
    if (res.status === false) {
      return throwError('Something bad happened; please try again later.');
    }
    return res.data;
  }
}
