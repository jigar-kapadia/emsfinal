import {Injectable} from '@angular/core';
// import {HttpClient,HttpHeaders} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import { Http, Headers, Response } from '@angular/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Employee } from '../models/employee';
import {Country} from '../models/country';
import {State} from '../models/state';
import {City} from '../models/city';
import {Department } from '../models/department';
import {RoleMaster} from '../models/rolemaster';
import { empty } from 'rxjs/Observer';

@Injectable()
export class EmployeeService
{
    public token: string;
    public employees : Employee[];
    public employeeDetails : Employee;
    public url :string = 'http://localhost:51743/api/';
    constructor(private http : Http){
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    
    GetEmployees() : Observable<Employee[]> {
        //add token to header
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({ headers: headers });
        // get users from api
        //return this.http.get('http://localhost:51743/api/employees', options)
        return this.http.get(this.url + 'employees', options)
            .map((response: Response) => response.json());
    }

    GetEmployeeById(id : number) : Observable<Employee>{
        //add token to header
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({ headers: headers });

        // get employee details from api
        //return this.http.get('http://localhost:51743/api/employee/'+id, options)
        return this.http.get(this.url + 'employee/'+id, options)
            .map((response: Response) => response.json());
    }

    GetCountries() : Observable<Country[]>{
        //add token to header
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({ headers: headers });
        // get countries from api
        //return this.http.get('http://localhost:51743/api/employee/countries', options)
        return this.http.get(this.url + 'employee/countries', options)
            .map((response: Response) => response.json());
    }

    GetDepartments() : Observable<Department[]>{
        //add token to header
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({ headers: headers });
        // get countries from api
        //return this.http.get('http://localhost:51743/api/employee/departments', options)
        return this.http.get(this.url+'employee/departments', options)
            .map((response: Response) => response.json());
    }

    GetRoles() : Observable<RoleMaster[]>{
        //add token to header
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({ headers: headers });
        // get countries from api
        //return this.http.get('http://localhost:51743/api/employee/roles', options)
        return this.http.get(this.url+'employee/roles', options)
            .map((response: Response) => response.json());
    }


    GetStates(countryId : number) : Observable<State[]>{
        //add token to header
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({ headers: headers });
        // get countries from api
        //return this.http.get('http://localhost:51743/api/employee/states/'+countryId, options)
        return this.http.get(this.url+'employee/states/'+countryId, options)
            .map((response: Response) => response.json());
    }

    GetCities(stateId : number) : Observable<City[]>{
        //add token to header
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({ headers: headers });
        // get countries from api
        return this.http.get('http://localhost:51743/api/employee/cities/'+stateId, options)
            .map((response: Response) => response.json());
    }

    UpdateEmployee(id : number, emp :Employee ) : Observable<boolean>{
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({ headers: headers });
        //return this.http.post('http://localhost:51743/api/employee/update/'+id, options)
        return this.http.post(this.url + 'employee/update/'+id, options)
            .map((response: Response) => response.json());
    }

    CreateEmployee(emp :any ) : Observable<any>{
        let headers = new Headers({'Authorization': 'Bearer ' + this.token ,
        'Content-Type':  'application/json'});
        let options = new RequestOptions({ headers: headers });
        //return this.http.post('http://localhost:51743/api/employee/update/'+id, options)
        
        return this.http.post('http://localhost:51743/api/create', emp, options)
            .map((response: Response) => response.json());
    }


}