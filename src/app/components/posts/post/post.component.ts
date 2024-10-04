import { Component, Input, OnInit } from '@angular/core';
import { PostI } from '../post.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post!: PostI; 
  h2s: string[] = []; 
  h3s: string[] = []; 
  paragraphs: string[] = []; 
  

  ngOnInit() {
    this.extractContent();
  }
  
  // Extracts content from the post's HTML and assigns it to variables
  extractContent() {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.post.content.rendered, 'text/html');

    // Extract and assign content to the variables using helper methods
    this.h2s = this.extractTextContent(doc, 'h2');
    this.h3s = this.extractTextContent(doc, 'h3');
    this.paragraphs = this.extractTextContent(doc, 'p');
  }

  // Reusable method to extract text content from a specific tag
  extractTextContent(doc: Document, selector: string): string[] {
    return Array.from(doc.querySelectorAll(selector))
      .map(el => el.textContent || ''); 
  }
}
