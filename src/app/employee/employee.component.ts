import { Component, OnInit } from '@angular/core';
import {Login} from '../login/login.model';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';
import {Employee} from '../models/employee';
import {EmployeeService} from '../services/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees : Employee[] = [];
  constructor(private router : Router,private empService : EmployeeService) { }

  ngOnInit() {
    this.empService.GetEmployees()
    .subscribe(employeesList=>{
      this.employees = employeesList
    });
  }

  // getById(id : string) : void{
  //   sessionStorage.setItem('IdToGet',id);
  //   this.router.navigate(["/employeedetails"]);
  // }

  create() : void{
    this.router.navigate(["/create"]);
  }
}
