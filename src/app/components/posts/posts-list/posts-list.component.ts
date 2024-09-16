import { Component, OnInit } from '@angular/core';
import { DataWpService } from '../data-wp.service';
import { PostI } from '../post.interface';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from '../post/post.component'; // Importa el PostComponent
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, PostComponent], // Importa PostComponent
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
  providers: [DataWpService]
})
export class PostsListComponent implements OnInit {
  posts: PostI[] = []; // Almacena los posts obtenidos de la API

  constructor(private dataWp: DataWpService) {}

  // Observable para almacenar los posts
  posts$: Observable<PostI[]> = new Observable<PostI[]>();

  ngOnInit() {
    // método getPostsPolling() para obtener los posts cada 5 segundos
    this.posts$ = this.dataWp.getPostsPolling();

    // Suscribirse al observable para obtener los posts y mostrarlos en la consola
    this.posts$.subscribe(posts => {
      this.posts = posts;
      console.log('Posts actualizados:', this.posts);
    });
  }
}
