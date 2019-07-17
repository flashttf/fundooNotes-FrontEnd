import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { LabelService } from 'src/services/label.service';
import { NotesService } from 'src/services/notes.service';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-labeltonote',
  templateUrl: './labeltonote.component.html',
  styleUrls: ['./labeltonote.component.scss']
})
export class LabeltonoteComponent implements OnInit {

  @Input() labelInfo:any;
  labels:[];
  message:string;

  

  constructor(private snackbar:MatSnackBar,private labelService:LabelService,
    private noteService:NotesService,private dataService:DataService) { }

  ngOnInit() {
  
  } 


  getAllLabels() {
   this.noteService.getNoteLabels("").subscribe(
     (response:any)=>{
       this.labels=response;
       console.log("console",response);
       
     }
   )
  }
 
    
  onDeleteLabel(label1:any){
    this.noteService
    .deleteLabelFromNote
    ("note/RemoveLabelToNote?labelId="+label1.labelId+"&noteId="+this.labelInfo.noteId)
    .subscribe(
      (response:any)=>{
        if(response.statusCode==200){
          this.dataService.changeMessage('Label deleted from note');
          this.snackbar.open("Label removed","close",{duration:2500})
        }
        else{
          this.snackbar.open("Label Not removed","close",{duration:2500});
        }
      }
    )
  }
   
}
