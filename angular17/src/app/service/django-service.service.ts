import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DjangoServiceService {

  private apiUrl = 'http://127.0.0.1:8000/api/v1/registrar/usuario';

  constructor(private http: HttpClient) { }

  registro(datos_registro:any): Observable<any>{
    return this.http.post<any>(this.apiUrl,datos_registro).pipe(
      catchError(error => {
        throw error;
      })
    );
  }
}
