import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostI } from './post.interface';
import { Observable, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class DataWpService {
  urlApi: string = 'http://localhost:8080/Mushroomsoft/wordpress/wp-json/wp/v2/posts'; // URL de la API

  constructor(private http: HttpClient) { }

  // Polling cada 30 segundos para obtener los posts
  getPostsPolling(): Observable<PostI[]> {
    return interval(5000) // Intervalo de 5 segundos
      .pipe(
        switchMap(() => this.getPosts()) // Llama a getPosts() en cada intervalo
      );
  }

  // Método para obtener los posts de la api
  getPosts(): Observable<PostI[]> {
    return this.http.get<PostI[]>(this.urlApi, {
      params: {
        per_page: '9' // Obtener 9 posts
      }
    });
  }
}
