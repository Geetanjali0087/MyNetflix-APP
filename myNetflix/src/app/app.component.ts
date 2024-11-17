import { Component } from '@angular/core';
import { MyNetflixAppComponent } from './my-netflix-app/my-netflix-app.component';
import { LoginComponent } from './login/login.component';
import { COntentPartComponent } from "./content-part/content-part.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyNetflixAppComponent, LoginComponent, COntentPartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myNetflix';

  // print(){
  //   console.log('printed')
  // }
}
