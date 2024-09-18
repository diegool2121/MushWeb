import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/components/home/home.component';
import { PostsListComponent } from './app/components/posts/posts-list/posts-list.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent }, // Ruta para el componente "Home"
      {path: 'home', component: HomeComponent}, // Ruta para el componente "Home"
      { path:'posts', component: PostsListComponent}, // Ruta para "Sobre Nosotros"
    ]), 
  ],
}).catch((err) => console.error(err));
