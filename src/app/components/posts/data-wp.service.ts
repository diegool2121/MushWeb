import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, interval } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { PostI } from './post.interface';

@Injectable({
  providedIn: 'root',
})
export class DataWpService {
  private urlApi: string = 'http://localhost:4283/wp-json/wp/v2/posts'; // Reemplaza con tu URL de API
  private pollingInterval = 10000; // Intervalo de 10 segundos

  constructor(private http: HttpClient) {}

  // Método que obtiene los posts con polling
  getPosts(): Observable<PostI[]> {
    return interval(this.pollingInterval).pipe(
      // Cambia el flujo de intervalos a llamadas HTTP
      switchMap(() => this.http.get<PostI[]>(this.urlApi).pipe(
        catchError(error => {
          console.error('Error fetching posts', error);
          // Devuelve un array vacío en caso de error
          return of([]);
        })
      ))
    );
  }
}
