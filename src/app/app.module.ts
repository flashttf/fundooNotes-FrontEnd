import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule, MatSnackBarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 

import { FlexLayoutModule } from "@angular/flex-layout";


import {MatIconModule} from '@angular/material/icon'; 

import {MatInputModule} from '@angular/material/input'; 
import {MatCardModule} from '@angular/material/card'; 

import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './components/login/login.component';
 
 
 import {RegisterComponent} from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent  
    
     

  ],
  imports: [
    BrowserModule,
    MatInputModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
