import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,private loginService: LoginService,private location : Location) {
    
  }
  username : string ;
  isTokenPresent : boolean = false;
  ngOnInit() {
    var token = JSON.parse(localStorage.getItem('currentUser'));
    if(token)
    {
      this.username = token.username;
      this.isTokenPresent = true;
    }
    
  }

  logOut() : void{
    this.loginService.logout();
    this.router.navigate(['/login']);
}

}
