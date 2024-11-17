import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-netflix-app',
  standalone: true,
  imports: [],
  templateUrl: './my-netflix-app.component.html',
  styleUrl: './my-netflix-app.component.css'
})
export class MyNetflixAppComponent {
  imagePath = 'https://imgs.search.brave.com/2BhSv6raW7E3wOPTAUGGWArZjbqzyZvd68eVqR8ezn0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtYnJh/bmRzLWluLWNvbG9y/cy83NTAwL05ldGZs/aXhfTG9nb19SR0It/NTEyLnBuZw';

  backGroundPath ='https://www.okynemedialab.com/wp-content/uploads/2019/11/netflix-background-50-Black-1080x608.jpg'
  
  constructor(private router:Router){}

  // onButtonClick(pageNmae:string):void{
  //   console.log('Sign in Button Cliked....');
  //   this.router.navigate(['${pageNmae}'])
  // }
  navigateToLogin(){
    this.router.navigate(['/login']);
  }
 
}
