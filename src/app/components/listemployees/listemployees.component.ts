import { Component, OnInit,ViewContainerRef } from '@angular/core';
import {DataTableResource} from 'angular5-data-table';
import {EmployeeService} from '../../services/employee.service';
import {Login} from '../../login/login.model';
import {LoginService} from '../../services/login.service';
import {Router,ActivatedRoute } from '@angular/router';
import {Employee} from '../../models/employee';
import {ModalDialogService} from 'ngx-modal-dialog';
import {EmployeedialogComponent} from '../employeedialog/employeedialog.component'
@Component({
  selector: 'app-listemployees',
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css']
})
export class ListemployeesComponent implements OnInit {
  itemResource =new DataTableResource(null) ;
  items = [];
  itemCount = 0;
  employees : Employee[] = [];
  constructor(private router : Router,private empService : EmployeeService,private vref : ViewContainerRef,private modalService : ModalDialogService) {
    
   }

  ngOnInit() {
    console.log('init')
    this.empService.GetEmployees()
    .subscribe(employeesList=>{
      this.employees = employeesList;
       this.itemResource = new DataTableResource(this.employees);
    this.items = this.employees;
    this.itemResource.count().then(co => this.itemCount = co)
    });
   
  }

  getEmployyesList(event,id)
  {
    this.modalService.openDialog(this.vref,{
      title : 'Employee Details',
      childComponent : EmployeedialogComponent,
      data : id
    });
  }

}
