// src/app/app.routes.ts

import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { Page1Component } from './page1/page1.component';
import { MyNetflixAppComponent } from './my-netflix-app/my-netflix-app.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'home', component: MyNetflixAppComponent },
  { path: 'page1', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];



