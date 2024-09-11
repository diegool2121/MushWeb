import { Component } from '@angular/core';
import { PostsListComponent } from './components/posts/posts-list/posts-list.component';
import { HomeComponent } from "./components/home/home.component";
import { MembersComponent } from './components/members/members.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PostsListComponent,
    HomeComponent, 
    MembersComponent, 
    RouterModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MushWeb';
}
