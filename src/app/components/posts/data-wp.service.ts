import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { PostI } from './post.interface';

@Injectable({
  providedIn: 'root',
})
export class DataWpService {
  private urlApi: string = 'http://localhost:4283/wp-json/wp/v2/posts'; // Reemplaza con tu URL de API

  constructor(private http: HttpClient) {}

  // Método que obtiene los posts una vez sin polling
  getPosts(): Observable<PostI[]> {
    return this.http.get<PostI[]>(this.urlApi).pipe(
      catchError(error => {
        console.error('Error fetching posts', error);
        // Devuelve un array vacío en caso de error
        return of([]);
      })
    );
  }
}
