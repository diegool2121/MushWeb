import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostI } from './post.interface';
import { Observable } from 'rxjs';

@Injectable()
export class DataWpService {
  urlApi: string = 'http://localhost:8080/Mushroomsoft/wordpress/wp-json/wp/v2/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostI[]> {
    return this.http.get<PostI[]>(this.urlApi, {
      params: {
        per_page: '9'
      }
    });
  }
}
