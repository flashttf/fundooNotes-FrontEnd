import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
// import {MatDialog} from '@angular/material/dialog';
import { LabelService } from 'src/services/label.service';
import { NotesService } from 'src/services/notes.service';
import { DataService } from 'src/services/data.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EditlableComponent } from '../editlable/editlable.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showFiller = false;
 

  appTitle:string;
  constructor(private labelService:LabelService,
    private noteService:NotesService,private dataService:DataService,
    private router:Router) { }

    open:boolean;
    labels:[]

    search=new FormControl();
    message:string;

  ngOnInit() {
    this.appTitle="FundooNotes";
    this.dataService.currentMessage.subscribe(
      message=>{;this.message=message,this.getAllLabels()}
    )
  }

  onSearch(){
    
  }

  labelList=[];
  getAllLabels() {
    this.labelService.getRequest("readAll").subscribe(
      (Response:any)=>{
        this.labelList=Response;
        console.log("labels on dashboard-->",this.labelList);
        
      }
    )
  }
  
  

  onNote() {
    this.appTitle = "Note";
    this.router.navigate(['dashboard']);
}

openDialogLabel(notes:any){
  // const dialogRef=this.dialog.open(EditlableComponent,
  //   {
  //     height:'600px',
  //     width:'450px',
  //   });
}

onAccount(){
  this.open=true;
}

onArchive(){
  this.router.navigate(['dashboard/archive'])
}

onTrash(){
  this.router.navigate(['dashboard/trash'])
}

}
