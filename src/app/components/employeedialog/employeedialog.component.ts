import { Component, OnInit, ComponentRef } from '@angular/core';
import { IModalDialog,IModalDialogOptions,IModalDialogButton } from 'ngx-modal-dialog';
import { Employee } from '../../models/employee';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-employeedialog',
  templateUrl: './employeedialog.component.html',
  styleUrls: ['./employeedialog.component.css']
})
export class EmployeedialogComponent implements OnInit,IModalDialog {
  employee : Employee;
  actionButtons: IModalDialogButton[];
  constructor(private empService : EmployeeService) { 
    this.actionButtons = [
      { text: 'Close', onAction: () => true } // no special processing here
    ];
  }

  ngOnInit() {
  }

  dialogInit(ref : ComponentRef<IModalDialog>,options : Partial<IModalDialogOptions<any>>){

console.log(options.data);
this.empService.GetEmployeeById(options.data)
    .subscribe(employee=>{
      this.employee = employee;
      console.log(this.employee);
    });

  }

}
