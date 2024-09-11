import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../posts/post/post.component';
import { PostsListComponent } from '../posts/posts-list/posts-list.component';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [ CommonModule, PostComponent, PostsListComponent ],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent {

}
