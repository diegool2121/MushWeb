import { Component } from '@angular/core';
import { PostsListComponent } from './components/posts/posts-list/posts-list.component';
import { HomeComponent } from "./components/home/home.component";
import { RouterModule } from '@angular/router';
import { PostComponent } from "./components/posts/post/post.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PostsListComponent,
    HomeComponent,
    RouterModule,
    PostComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MushWeb';
}
