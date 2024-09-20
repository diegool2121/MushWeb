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
  imports: [CommonModule, HttpClientModule, PostComponent],
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
  providers: [DataWpService]
})

export class PostsListComponent implements OnInit {
  // Variables para almacenar los posts y párrafos de la parte trasera
  posts: PostI[] = [];
  post: PostI[] = [];
  h2s: string[] = [];
  images: string[] = [];

  constructor(private dataWp: DataWpService) {}
  
  ngOnInit() {
    this.dataWp.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(this.posts);
    
      // Mapear directamente las imágenes de cada post
      this.images = this.posts.map(post => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(post.content.rendered, 'text/html');
        const imageElement = doc.querySelector('img');
        return imageElement ? imageElement.src : 'No image available';
      });
      // Mapear directamente los h2 de cada post
      this.h2s = this.posts.map(post => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(post.content.rendered, 'text/html');
        const h2Element = doc.querySelector('h2');
        return h2Element ? h2Element.textContent || '' : 'No h2 available';
      });
  });
}
}

