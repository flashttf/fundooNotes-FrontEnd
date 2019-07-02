import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { NotesService } from 'src/services/notes.service';
import { DataService } from 'src/services/data.service';
import { NoteUpdateComponent } from '../note-update/note-update.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  notes:[]

  constructor(private snackbar:MatSnackBar,private noteService:NotesService,
    private dataService:DataService,public dialog:MatDialog) { }

      message:string;
  ngOnInit() {
    this.dataService.currentMessage.subscribe(
      message=>{this.message=message,this.getAllNotes()}
    )
  }
  getAllNotes() {
    this.noteService.getRequest("readNote").subscribe(
      (Response:any)=>{
        this.notes=Response;
      }
    )
  }

  onUpdate(note:any):void{
    const dialogRef=this.dialog.open(NoteUpdateComponent,{
        height:'300px',
        width:'300px',
        data:{
          'title':note.title,
          'description':note.description,
          'noteId':note.noteId
        }
    }
      );
  }

}
