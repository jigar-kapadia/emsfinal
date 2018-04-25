import { Component,ElementRef, OnInit,Input,OnDestroy,Inject } from '@angular/core';
// import * as $ from 'jquery';
// import {ModalService} from '../services/modal.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { EmployeedetailsComponent } from '../employeedetails/employeedetails.component';



@Component({
  moduleId:module.id.toString(),
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  // constructor(public dialog: MatDialog) {}

  // // constructor(
  //   // public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
  //   // @Inject(MAT_DIALOG_DATA) public data: any) { }

  constructor(public dialog: MatDialog,public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    //  openDialog(id): void {
    //    let dialogRef = this.dialog.open(EmployeedetailsComponent, {
    //      width: '250px',
    //      data: {id}
    //    });
    //  }
}

