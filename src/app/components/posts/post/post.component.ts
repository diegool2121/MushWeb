import { Component, Input, OnInit } from '@angular/core';
import { PostI } from '../post.interface';
import { CommonModule } from '@angular/common'; // Importa CommonModule


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule], // Importa otros componentes o módulos si es necesario
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post!: PostI;
  images: string[] = [];
  h2s: string[] = []; 
  h3s: string[] = []; 
  h4s: string[] = [];
  paragraphs: string[] = [];

  ngOnInit() {
    this.extractContent();
  }

  extractContent() {
    // Crear un elemento div temporal para analizar el contenido HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.post.content.rendered, 'text/html');

    // Extraer cada uno de los párrafos <p>
    const paragraphElements = doc.querySelectorAll('p');
    this.paragraphs = Array.from(paragraphElements).map(p => p.textContent || '');

    //Extraer el h2 del content
    const h2Elements = doc.querySelectorAll('h2');
    this.h2s = Array.from(h2Elements).map(h => h.textContent || '');

    // Extraer el h3 del content
    const h3Elements = doc.querySelectorAll('h3');
    this.h3s = Array.from(h3Elements).map(h => h.textContent || '');

    // Extraer el h4 del content 
    const h4Elements = doc.querySelectorAll('h4');
    this.h4s = Array.from(h4Elements).map(h => h.textContent || '');

    // Extraer imágenes del content 
    const imageElements = doc.querySelectorAll('img');
    this.images = Array.from(imageElements).map(img => img.src);
  }
}
