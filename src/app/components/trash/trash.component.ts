import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NotesService } from 'src/services/notes.service';
import { DataService } from 'src/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  constructor(private noteService:NotesService,private dataService:DataService) { }

  notes:[]
  message:string;
  
    ngOnInit() {
      this.dataService.currentMessage.subscribe(
        message=>{;this.message=message,this.getAllNotes()}
      )
      
    }
  
    getAllNotes(){
      this.noteService.getNotes().subscribe(
        (response:any)=>{
          this.notes=response;
        }
      )
    }
}
