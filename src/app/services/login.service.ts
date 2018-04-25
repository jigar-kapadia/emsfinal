import {Injectable} from '@angular/core';
// import {HttpClient,HttpHeaders} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import {Login} from '../login/login.model';


@Injectable()
export class LoginService
{
    public token: string;

    constructor(private http : Http){
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(loginModel : Login) : Observable<boolean>{
        return this.http.post('http://localhost:51743/api/login/AuthenticateUser',loginModel)
        .map((reposone : Response)=>{
            // login successful if there's a jwt token in the response
            let token = reposone.json();//&& reposone.json().token;
            if(token)
            {
                console.log(token);
                // set token property
                this.token = token;

                //store jwt token with username in local storage to keep user logged in between page refreshes  
                localStorage.setItem('currentUser', JSON.stringify({ username: loginModel.Username, token: token }));
             // return true to indicate successful login
             return true;
            } else {
                // return false to indicate failed login
                return false;
            }
        });
    }

    logout() : void{
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}