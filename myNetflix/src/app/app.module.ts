// src/app/app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { MyNetflixAppComponent } from './my-netflix-app/my-netflix-app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
     // Declare your main component
  
  ],
  imports: [
    BrowserModule, // Essential module to run Angular in the browser
    AppRoutingModule // Import routing module
],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]  // Bootstrap the main component
})
export class AppModule { }
