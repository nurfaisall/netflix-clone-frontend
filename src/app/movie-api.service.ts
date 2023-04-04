import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  
  url:String = 'https://api.themoviedb.org/3'
  apiKey:String = 'api_key=08cc33bd5ae3a747598ce2ad84376e66';

  constructor(private http:HttpClient) { }

  bannerApiData(): Observable<any> {
    return this.http.get<any>(`${this.url}/trending/all/week?${this.apiKey}`)
  }

  trendingApiData(): Observable<any>{
    return this.http.get<any>(`${this.url}/trending/movie/day?${this.apiKey}`)
  }

  movieDetail(id: String | null): Observable<any>{
    return this.http.get<any>(`${this.url}/movie/${id}?${this.apiKey}`)
  }

  movieSearch(query: String): Observable<any>{
    return this.http.get<any>(`${this.url}/search/movie?${this.apiKey}&query=${query}`)
  }
}
