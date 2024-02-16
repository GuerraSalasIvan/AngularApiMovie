import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  apiUrl = 'https://api.themoviedb.org/3'
  apiKey = '665eddc29536d1ffc4e5fdace47ae8c7'

  bannerApiData():Observable<any>{
    return this.http.get(`${this.apiUrl}/trending/all/week?api_key=${this.apiKey}`)
  }

  trending():Observable<any>{
    return this.http.get(`${this.apiUrl}/trending/movie/day?api_key=${this.apiKey}`)
  }


}
