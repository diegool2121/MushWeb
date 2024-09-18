import { Component, Input, OnInit } from '@angular/core';
import { PostI } from '../post.interface';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [], // Importa PostComponent
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post!: PostI;
  paragraphs: string[] = []; // Array to store the paragraphs
  images: string[] = [];

  ngOnInit() {
    this.extractContent();
  }

  extractContent() {
    // Crear un elemento div temporal para analizar el contenido HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.post.content.rendered, 'text/html');

   // Extraer cada uno de los párrafos <p>
   const paragraphElements = doc.querySelectorAll('p');
   this.paragraphs = Array.from(paragraphElements).map(p => p.textContent || '')

    // Extraer imágenes
    const imageElements = doc.querySelectorAll('img');
    this.images = Array.from(imageElements).map(img => img.src);
  }
}
