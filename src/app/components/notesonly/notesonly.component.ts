import { Component, OnInit } from '@angular/core';
import { NoteUpdateComponent } from '../note-update/note-update.component';
import { DataService } from 'src/services/data.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { NotesService } from 'src/services/notes.service';

@Component({
  selector: 'app-notesonly',
  templateUrl: './notesonly.component.html',
  styleUrls: ['./notesonly.component.scss']
})
export class NotesonlyComponent implements OnInit {

  
  
  notes : any[]
Color:any;
  constructor(private snackbar:MatSnackBar,private noteService:NotesService,
    private dataService:DataService,public dialog:MatDialog) { }

      message:string;
      
  ngOnInit() {
    this.dataService.currentMessage.subscribe(
      message=>{this.message=message,this.getAllNotes()}
    )
   
  }


  getAllNotes() {
    this.noteService.getNotes().subscribe(
      (Response:any)=>{
        
        this.Color=Response.colorCode;
        
        this.notes=Response;
      }
    )
  }

  onUpdate(note:any):void{
    this.dialog.open(NoteUpdateComponent,{
        height:'180px',
        width:'300px',
        data:{
          noteId:note.noteId,
          title:note.title,
          description:note.description,
          
        }
    }
      );
  }

}
