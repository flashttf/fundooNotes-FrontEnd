import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/services/notes.service';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

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

//   getAllArchiveNotes() {
//    this.noteService.getArchiveNotes("note/getArchiveNotes").subscribe(
//      (response:any)=>{
//        this.dataService.changeMessage("Displaying Archived Notes");
//        this.notes=response;
//      }
//    )
// }
}
