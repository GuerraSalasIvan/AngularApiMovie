import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  apiUrl = 'https://api.themoviedb.org/3'
  miApi = 'http://127.0.0.1:8080/api/v1/registrar/usuario'
  apiKey = '665eddc29536d1ffc4e5fdace47ae8c7'

  bannerApiData():Observable<any>{
    return this.http.get(`${this.apiUrl}/trending/all/week?api_key=${this.apiKey}`)
  }

  trending():Observable<any>{
    return this.http.get(`${this.apiUrl}/trending/movie/day?api_key=${this.apiKey}`)
  }

  buscarPeliData(data:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${data.peliNombre}`)
  }  

  obtenerPeli(data:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/movie/${data}?api_key=${this.apiKey}`)
  }

  obtenerVideoPeli(data:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/movie/${data}/videos?api_key=${this.apiKey}`)
  }
  
  obtenerRepartoPeli(data:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/movie/${data}/credits?api_key=${this.apiKey}`)
  }

  //Registro 
  registrarUsuario(datosRegistro: any): Observable<any> {
    return this.http.post<any>(this.miApi, datosRegistro)
  }
}
