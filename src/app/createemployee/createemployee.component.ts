import { Component, OnInit } from '@angular/core';
import {Country} from '../models/country';
import {State} from '../models/state';
import {City} from '../models/city';
import {Department } from '../models/department';
import {RoleMaster} from '../models/rolemaster';
import {EmployeeService} from '../services/employee.service';
import {Router} from '@angular/router';
//import { stat } from 'fs';
import {Employee} from '../models/employee';
//import { listener } from '@angular/core/src/render3';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
  model: Employee;
  countries : Country[];
  states : State[];
  cities : City[];
  departments : Department[];
  roles : RoleMaster[];
  IsCountrySelected : boolean = false;
  IsStateSelected : boolean = false;
  constructor(private router : Router,private employeeService : EmployeeService) {
    
   }

  ngOnInit() {
    this.model = new Employee();
    this.getCountries();
    this.getDepartments();
    this.getRoles();
  }

  CreateEMployee(employee : Employee) : void{
    console.log(employee);
  }

  getDepartments() : void{
    //this.
    this.employeeService.GetDepartments()
    .subscribe(List=>{
      console.log(List)
      this.departments = List
    });
  }

  getRoles() : void{
    this.employeeService.GetRoles()
    .subscribe(List=>{
      console.log(List)
      this.roles = List
    });
  }

  OnCountryChange(countryId) : void
  {
    this.getStates(countryId);
  }

  onStateChange(stateId) : void{
    this.getCites(stateId);
  }

  getCites(stateId) : void{
    this.IsCountrySelected = true;
    this.IsStateSelected = true;
    this.employeeService.GetCities(stateId)
    .subscribe(List=>{
      console.log(List)
      this.cities = List
    });
  }


  getStates(countryId) : void{
    this.IsCountrySelected = true;
    this.employeeService.GetStates(countryId)
    .subscribe(List=>{
      console.log(List)
      this.states = List
    });
  }
  getCountries() : void{
    this.employeeService.GetCountries()
    .subscribe(List=>{
      console.log(List)
      this.countries = List
    });
  }
}
