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
  posts: PostI[] = [];
  h1s: string[] = [];
  images: string[] = [];

  constructor(private dataWp: DataWpService) {}
  
  ngOnInit() {
    this.dataWp.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(this.posts);
    
      // img mapping
      this.images = this.posts.map(post => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(post.content.rendered, 'text/html');
        const imageElement = doc.querySelector('img');
        return imageElement ? imageElement.src : 'No image available';
      });
      // h1 mapping
      this.h1s = this.posts.map(post => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(post.content.rendered, 'text/html');
        const h1Element = doc.querySelector('h1');
        return h1Element ? h1Element.textContent || '' : 'No h1 available';
      });
  });
}
}

