import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
// import {MatDialog} from '@angular/material/dialog';
import { LabelService } from 'src/services/label.service';
import { NotesService } from 'src/services/notes.service';
import { DataService } from 'src/services/data.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EditlableComponent } from '../editlable/editlable.component';
import { BehaviorSubject } from 'rxjs';
import { HttpServiceService } from 'src/services/http-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showFiller=false;
  
  appHeadTitle:string;
 

  appTitle:string;
  constructor(private labelService:LabelService,
    private noteService:NotesService,private dataService:DataService,
    private router:Router,private dialog:MatDialog,private httpService:HttpServiceService) { }

    open:boolean;
    labels:[];
    data:[];

    image:string

    search=new FormControl();
    message:string;
    profilePicture:any;

  ngOnInit() {
    
    this.appTitle="FundooNotes";

    // this.getAllLabels();
    this.dataService.currentMessage.subscribe(
      message=>{;this.message=message,this.getAllLabels()}
    )

    this.httpService.getRequest("users/getImage").subscribe(
      (response:any)=>{

        this.image=response

//         if(response.statusCode==200){
//           localStorage.setItem('profilePicture',response);
//           console.log(response);
          
//         }else{
//           console.log("error pic");
          
//         }
//       }
// ,
//       (err)=>{
// console.log("err",err);

      }
    )
  }

  onSearch(){
    
  }

  
  getAllLabels() {
    this.labelService.displayLabels().subscribe(
      (Response:any)=>{
      
        
        this.labels=Response;
        console.log("labels on dashboard-->",this.data);
       
      }
    )
  }
  
  

  onNote() {
    this.appTitle = "Note";
    this.router.navigate(['dashboard/note']);
}

openDialogLabel():void{
  console.log("label",this.labels);
  
    this.dialog.open(EditlableComponent,
    {
      height:'300px',
      width:'250px',
    });
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
