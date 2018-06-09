import { Component,OnInit } from '@angular/core';
import {LoginService} from '../app/services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private loginService : LoginService){

  }
  //*ngIf="isCustomer"

  isLoggedIn : boolean = false;

  username : string ;
  isTokenPresent : boolean = false;
  ngOnInit(){
    
    this.loginService.userChange$.subscribe(res =>{ this.isLoggedIn = res.ischange })

  //   var token = JSON.parse(localStorage.getItem('currentUser'));
  //   if(token)
  //   {
  //     this.username = token.username;
  //     this.isTokenPresent = true;
  //   }
    
  }
}
