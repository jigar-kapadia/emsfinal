import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  //
  constructor(private router: Router,private loginService: LoginService,private location : Location) {
    
  }

  logOut() : void{
      this.loginService.logout();
      this.router.navigate(['/login']);
  }

  goBack() :void{
    this.location.back();
  }
  ngOnInit() {
  }

}
