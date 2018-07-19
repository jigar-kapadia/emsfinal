import { Component, OnInit } from '@angular/core';
import {Country} from '../../models/country';
import {State} from '../../models/state';
import {City} from '../../models/city';
import {Department } from '../../models/department';
import {RoleMaster} from '../../models/rolemaster';
import {EmployeeService} from '../../services/employee.service';
import {Router} from '@angular/router';
//import { stat } from 'fs';
import {Employee} from '../../models/employee';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-createnew',
  templateUrl: './createnew.component.html',
  styleUrls: ['./createnew.component.css']
})
export class CreatenewComponent implements OnInit {
  model: Employee;
  countries : Country[];
  states : State[];
  cities : City[];
  departments : Department[];
  roles : RoleMaster[];
  IsCountrySelected : boolean = false;
  IsStateSelected : boolean = false;
  employeeForm : FormGroup;
  constructor(private router : Router,private employeeService : EmployeeService,private fb : FormBuilder) {
    
   }

  ngOnInit() {
    this.model = new Employee();
    // this.getCountries();
    // this.getDepartments();
    // this.getRoles();
    this.createform();
  }

  createform(){
    // this.employeeForm = this.fb.group({
    //   FirstName : ['',Validators.required],
    //   LastName : ['',Validators.required],
    //   Email : ['',[Validators.required,Validators.email]],

    // })
    this.employeeForm = new FormGroup({
      FirstName : new FormControl('',Validators.required),
      LastName : new FormControl('',Validators.required),
      Email : new FormControl('',[Validators.required,Validators.email]),
      Gender : new FormControl('',Validators.required)
    })
  }

  CreateEmployee(event) : void{
    console.log(event.target.value);
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

  getCountries() : void{
    this.employeeService.GetCountries()
    .subscribe(List=>{
      console.log(List)
      this.countries = List
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
}
