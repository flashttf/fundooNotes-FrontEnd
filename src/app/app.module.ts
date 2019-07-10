import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatSnackBarModule, MatToolbarModule, MatTooltipModule,  MatMenuModule, MatSidenavModule, MatListModule, MatChipsModule  } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';


import { FlexLayoutModule } from "@angular/flex-layout";


import { MatIconModule } from '@angular/material/icon';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';


import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './components/login/login.component';


import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';

import { IconsComponent } from './components/icons/icons.component';
import { LabelComponent } from './components/label/label.component';
import { EditlableComponent } from './components/editlable/editlable.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { DisplaynoteComponent } from './components/displaynote/displaynote.component';
import { LabeltonoteComponent } from './components/labeltonote/labeltonote.component';
import { NoteUpdateComponent } from './components/note-update/note-update.component';
import { HttpServiceService } from 'src/services/http-service.service';
import { PinComponent } from './components/pin/pin.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    ResetpasswordComponent,
    CreatenoteComponent,
  
    IconsComponent,
  
    LabelComponent,
  
    EditlableComponent,
  
    ArchiveComponent,
  
    TrashComponent,
  
    DisplaynoteComponent,
  
    LabeltonoteComponent,
  
    NoteUpdateComponent,
  
    PinComponent,
  
   



  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatDialogModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatChipsModule,
    MatDatepickerModule
 ],
  providers: [HttpServiceService],
  entryComponents:[
    NoteUpdateComponent,
    EditlableComponent,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
