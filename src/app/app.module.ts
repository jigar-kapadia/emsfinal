import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule }   from '@angular/forms';
//import {RouterModule,Routes } from '@angular/router';
import {LoginService} from './services/login.service';
import {EmployeeService} from './services/employee.service';
import { HomeComponent } from './home/home.component';
import {AuthGuard} from '../app/guards/auth.guard';
import {routing} from '../app/app.routing';
import { EmployeeComponent } from './employee/employee.component';
import { LogoutComponent } from './logout/logout.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { ModalComponent } from './directives//modal.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
//import {ModalComponent} from '../app/directives/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CreatenewComponent } from './components/createnew/createnew.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListemployeesComponent } from './components/listemployees/listemployees.component';
import {DataTableModule} from 'angular5-data-table';
import {ModalDialogModule} from 'ngx-modal-dialog';
import { EmployeedialogComponent } from './components/employeedialog/employeedialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ContactValidatorDirective } from './directives/contact-validator.directive';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { MatDatepickerModule,MatInputModule,MatNativeDateModule } from '@angular/material';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {UiSwitchModule} from 'ngx-ui-switch';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmployeeComponent,
    LogoutComponent,
    CreateemployeeComponent,
    ModalComponent,
    EmployeedetailsComponent,
    CreatenewComponent,
    NavbarComponent,
    ListemployeesComponent,
    EmployeedialogComponent,
    ContactValidatorDirective,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MatDialogModule,
    DataTableModule.forRoot(),
    ModalDialogModule.forRoot(),
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    BsDatepickerModule.forRoot(),
    UiSwitchModule
  ],
  providers: [LoginService,EmployeeService,AuthGuard],
  bootstrap: [AppComponent],
  entryComponents:[
    EmployeedialogComponent
  ]
})
export class AppModule { }
