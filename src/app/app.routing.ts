import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from '../app/login/login.component';
import {HomeComponent} from '../app/home/home.component';
import {AuthGuard} from '../app/guards/auth.guard';
import { EmployeeComponent } from './employee/employee.component';
import {CreateemployeeComponent} from './createemployee/createemployee.component';
import {EmployeedetailsComponent} from './employeedetails/employeedetails.component';
import {CreatenewComponent} from './components/createnew/createnew.component';
import {ListemployeesComponent} from './components/listemployees/listemployees.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },
    // { path: 'create', component: CreateemployeeComponent, canActivate: [AuthGuard] },
    { path: 'create', component: CreatenewComponent, canActivate: [AuthGuard] },
    { path: 'list', component: ListemployeesComponent, canActivate: [AuthGuard] },
    {path:'employee/:id',component:EmployeedetailsComponent,canActivate:[AuthGuard]},
//{path :'history'},    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
    
];

export const routing = RouterModule.forRoot(appRoutes);