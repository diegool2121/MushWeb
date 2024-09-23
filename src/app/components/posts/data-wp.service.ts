import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostI } from './post.interface';

@Injectable({
  providedIn: 'root',
})
export class DataWpService {
  private urlApi: string = 'http://localhost:4283/wp-json/wp/v2/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostI[]> {
    return this.http.get<PostI[]>(this.urlApi).pipe(
      catchError(error => {
        console.error('Error fetching posts', error);
        return of([]);
      })
    );
  }
}
