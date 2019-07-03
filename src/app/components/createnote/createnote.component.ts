import { Component, OnInit } from '@angular/core';
import { Note } from '../../../app/model/note';
// import { MatSnackBar } from '@angular/material';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { NotesService } from 'src/services/notes.service';
// import { Router } from '@angular/router';
import { DataService } from 'src/services/data.service';


@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {

  open:boolean;
  note:Note =new Note();
  // notes:any[];
  
  title=new FormControl(this.note.title);
  
  description=new FormControl(this.note.description);
  
    constructor(private snackBar:MatSnackBar,private notesService:NotesService,private dataservice:DataService
      ) { }
  
    ngOnInit() {
    }
  
    onOpen(){
      this.open=true;
    }
  
    onClose(){
      this.open=false;
      if(this.note.title!=null||this.note.description!=null){
        console.log(this.note.title);
        this.notesService.postRequest("create",this.note).subscribe(
          (response:any)=>{
            console.log("note response==>",response);
            
          this.dataservice.changeMessage('fsdsef');
              if(response.statusCode==200){
                this.snackBar.open(response.statusMessage,"close",{duration:2500});
                
              }else{
                this.snackBar.open(response.statusMessage,"close",{duration:2500})
              }
          }
        )
          
      }
      this.note.title=null;
      this.note.description=null;
    }
  }

