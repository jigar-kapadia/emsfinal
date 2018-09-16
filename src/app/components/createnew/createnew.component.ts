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
import {ContactValidatorDirective} from '../../directives/contact-validator.directive';
import {MatDatepickerModule} from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

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
    this.createform();
    this.getCountries();
    this.getDepartments();
    this.getRoles();
    
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
      Contact : new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      Gender : new FormControl('',Validators.required),
      Country : new FormControl('',Validators.required),
      State : new FormControl('',Validators.required),
      City : new FormControl('',Validators.required),
      Department : new FormControl('',Validators.required),
      DateOfJoining : new FormControl(null,Validators.required),
      DateOfBirth : new FormControl(null,Validators.required),
      Role : new FormControl(null,Validators.required),
      IsActive : new FormControl(true,Validators.required)
    });
  }

  CreateEmployee(event) : void{
    console.log( this.employeeForm.value);
    var values = this.employeeForm.value

    var dateB = new Date(values.DateOfBirth);
    dateB.setMinutes(dateB.getMinutes() + dateB.getTimezoneOffset());
    var dateJ = new Date(values.DateOfJoining);
    
    dateJ.setMinutes(dateB.getMinutes() + dateJ.getTimezoneOffset());
    var newObject = {
      "Id" : 0,
      "FirstName" : values.FirstName,
      "LastName" : values.LastName,
      "Email" : values.Email,
      "Phone" : values.Contact,
      "Gender" : values.Gender,
      "CountryId" : values.Country,
      "StateId" : values.State,
      "CityId" : values.City,
      "DepartmentId" : values.Department,
      "DateOfBirth" : dateB,
      "DateOfJoining" : dateJ,
      "RoleType" : values.Role,
      "IsActive" : values.IsActive,
      "City": null,
      "Country": null,
      "Department": null,
      "RoleMaster": null,
      "State": null
    }
    
    this.model.FirstName = values.FirstName;
    this.model.LastName = values.LastName;
    this.model.Email = values.Email;
    this.model.Phone = values.Contact;
    this.model.Gender = values.Gender;
    this.model.CountryId = values.Country;
    this.model.StateId = values.State;
    this.model.CityId = values.City;
    this.model.DepartmentId = values.Department;
    this.model.DateOfBirth = values.DateOfBirth;
    this.model.DateOfJoining = values.DateOfJoining;
    this.model.RoleType = values.Role;
    this.model.IsActive = values.IsActive;
    this.model.Country = null;
    this.model.City = null;
    this.model.State = null;
    this.model.Department = null;
    this.model.Role = null;
    this.employeeService.CreateEmployee(newObject)
    .subscribe(result=>{
      console.log(result);
    });
    this.router.navigate(["/list"]);
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
    //alert(countryId)
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
