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
  // Variables para almacenar los posts
  posts: PostI[] = [];
  backParagraphs: string[] = [];

  constructor(private dataWp: DataWpService) {}

  ngOnInit() {
    this.dataWp.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(this.posts);

      // Procesar los párrafos para cada post y almacenarlos
      this.posts.forEach((post, index) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(post.content.rendered, 'text/html');
        const paragraphElements = doc.querySelectorAll('p');
        this.backParagraphs[index] = Array.from(paragraphElements).map(p => p.textContent || '')[0] || '';
      });
    });
  }
}
