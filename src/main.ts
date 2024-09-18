import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/components/home/home.component';
import { MembersComponent } from './app/components/members/members.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent }, // Ruta para el componente "Home"
      {path: 'home', component: HomeComponent}, // Ruta para el componente "Home"
      { path:'members', component: MembersComponent }, // Ruta para "Sobre Nosotros"
    ]), 
  ],
}).catch((err) => console.error(err));
