import { Component, OnInit } from '@angular/core';
import {Login} from '../login/login.model';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: Login;
  error : string;
  constructor(private router: Router,private loginService: LoginService) {
    
   }

  ngOnInit() {
    this.model = new Login();
    this.loginService.logout();
  }

  Aunthenticate(loginModel : Login) : void{
    
    this.loginService.login(loginModel)
    .subscribe(result => {
      if (result === true) {
          //this.error = 'Success';
          this.router.navigate(["/employee"]);
      } else {
          this.error = 'Username or password is incorrect';
          //this.loading = false;
      }
  });
  }
}
