import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../services/employee.service';
import {Login} from '../login/login.model';
import {LoginService} from '../services/login.service';
import {Router,ActivatedRoute } from '@angular/router';
import {Employee} from '../models/employee';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {ModalComponent} from '../directives/modal.component';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})


export class EmployeedetailsComponent implements OnInit {
  public employee : Employee = null;
  
  statusMessage: string ;
  constructor(private empService : EmployeeService, private _activatedRoute: ActivatedRoute,public dialog: MatDialog) { }

  ngOnInit() {
     let id = this._activatedRoute.snapshot.params['id'];
    this.empService.GetEmployeeById(id)
    .subscribe(employee=>{
      this.employee = employee
    });
  }

}
