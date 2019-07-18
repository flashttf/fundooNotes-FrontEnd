import { Component, OnInit, Input } from '@angular/core';
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

  @Input() noteInfo
  notes : any[]

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
        console.log("get response==>",Response);
        
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
