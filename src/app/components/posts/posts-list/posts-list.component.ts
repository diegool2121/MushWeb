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
  backParagraphs: string[] = [];

  constructor(private dataWp: DataWpService) {}

  ngOnInit() {
    this.dataWp.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(this.posts);

      // Mapear directamente los primeros párrafos de cada post
      this.backParagraphs = this.posts.map(post => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(post.content.rendered, 'text/html');
        const paragraphElement = doc.querySelector('p');
        return paragraphElement ? paragraphElement.textContent || '' : 'No content available';
      });
    });
  }
}
