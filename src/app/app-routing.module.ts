import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 


import { LoginComponent } from '../app/components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
// import { AuthGuardServiceService } from 'src/services/auth-guard-service.service';
import { CreatenoteComponent } from './components/createnote/createnote.component';
// import { IconsComponent } from './components/icons/icons.component';
import { LabelComponent } from './components/label/label.component';
// import { EditlableComponent } from './components/editlable/editlable.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';

import { DisplaynoteComponent } from './components/displaynote/displaynote.component';
import { SearchComponent } from './components/search/search.component';
import { NotesonlyComponent } from './components/notesonly/notesonly.component';
 
const routes: Routes = [
   
  {
    path:'',
    component:LoginComponent
  },
  
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
    path:"resetpassword/:token",
    component:ResetpasswordComponent
  },
  {
    path:'dashboard',
    // canActivate:[AuthGuardServiceService],
    component :DashboardComponent,
    children:[
          {
            path:'',
            component:CreatenoteComponent
          },
         
          {
            path:'note',
            component:NotesonlyComponent
          },
          
          {
            path:'archive',
            component:ArchiveComponent
          },
          
          {
            path:'search',
            component:SearchComponent
          },
          {
            path:'trash',
            component:TrashComponent
          }
          
    ]
  },
  {
    path:"label/:token",
    component:LabelComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
