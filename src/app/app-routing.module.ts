import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 


import { LoginComponent } from '../app/components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
 
const routes: Routes = [
   
  
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"forgotpassword",
    component:ForgotpasswordComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"resetpassword",
    component:ResetpasswordComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
