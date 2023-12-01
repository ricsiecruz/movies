import { Injectable } from '@angular/core';
import { environment } from 'src/environments';
import { Movies } from './models/movies';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  API_URL = (environment.apiUrl)

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get<Movies>(this.API_URL + '/movies')
  }

  getMovieDetails(id:number) {
    return this.http.get<Movies>(this.API_URL + `/movies/${id}`)
  }

  watchlist(item: any) {
    return this.http.put(this.API_URL + `/movies/${item.id}`, item)
  }
}
