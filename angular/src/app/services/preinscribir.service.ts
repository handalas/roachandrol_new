import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Asistente } from '../interfaces/asistente';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreinscribirService {

  urlApi:string = `http://localhost:8080/v1/preinscripcion/registraAsistente`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };
  
  constructor(private httpClient: HttpClient) { }

  preinscribete(request:Asistente):Observable<void>{
    return this.httpClient.post<void>(this.urlApi, JSON.stringify(request), this.httpOptions).pipe(catchError(this.errorHandler))
  }

  errorHandler(error:any){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
