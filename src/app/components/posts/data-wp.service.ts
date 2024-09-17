import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostI } from './post.interface';
import { Observable, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class DataWpService {
  urlApi: string = 'http://localhost:4283/wp-json/wp/v2/posts'; // API URL

  constructor(private http: HttpClient) { }

  // polling method to get posts every 5 seconds
  getPostsPolling(): Observable<PostI[]> {
    return interval(5000) // 5 seconds
      .pipe(
        switchMap(() => this.getPosts()) // call getPosts() every 5 seconds
      );
  }

  // Método para obtener los posts de la api
  getPosts(): Observable<PostI[]> {
    return this.http.get<PostI[]>(this.urlApi, {
      params: {
        per_page: '9' // get 9 posts
      }
    });
  }
}
