// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { Page1Component } from './page1/page1.component';
import { MyNetflixAppComponent } from './my-netflix-app/my-netflix-app.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: MyNetflixAppComponent },
  { path: 'page1', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
