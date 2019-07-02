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

  label:[]
  message:string;

  constructor(private snackbar:MatSnackBar,private labelService:LabelService,
   private noteService:NotesService,private dataService:DataService ) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(
      message=>{console.log(this.labelInfo);this.message=message,this.getAllLabels()
      }
    )
  } 
  getAllLabels() {
    console.log(this.labelInfo);
    console.log(this.labelInfo.noteId);
    console.log(this.label);
    
    this.noteService.getRequest('AddLabelToNote?labelId'+this.labelInfo.labelId+'&noteId'+this.labelInfo.noteId).subscribe(
      (Response:any)=>{
        if(Response.statusCode==200){
         this.label=Response;
         console.log(Response);
         
        }
      }
    )
    
    
    
  }

}
