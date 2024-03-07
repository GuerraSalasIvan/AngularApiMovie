import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private miApi = 'http://127.0.0.1:8080/api/v1/registrar/usuario';

  constructor(private http: HttpClient) { }

  registrarUsuario(datosRegistro: any): Observable<any> {
    return this.http.post<any>(this.miApi, datosRegistro)
      .pipe(catchError(error => {throw error;}));
  }
}
