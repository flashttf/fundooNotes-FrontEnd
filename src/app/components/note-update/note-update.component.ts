import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatSnackBar, MatDialog } from '@angular/material';
import { NotesService } from 'src/services/notes.service';
import { DataService } from 'src/services/data.service';
import { FormControl } from '@angular/forms';
import { Note } from 'src/app/model/note';

@Component({
  selector: 'app-note-update',
  templateUrl: './note-update.component.html',
  styleUrls: ['./note-update.component.scss']
})
export class NoteUpdateComponent implements OnInit {

  note: Note = new Note();
  title = new FormControl(this.data.title);
  description = new FormControl(this.data.description);

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private noteService: NotesService,
    private snackBar: MatSnackBar,
    private dataService: DataService,
    private dialog:MatDialog) { }

  ngOnInit() {
    console.log("data", this.data);

  }

  onCloseUpdateNote() {
    this.note = {
      "title": this.title.value,
      "description": this.description.value
    }

    this.noteService.updateNote("note/update?noteId=" + this.data.noteId, this.note).subscribe(
      (response: any) => {
        if (response.statusCode == 200) {
          console.log(response);

          this.dataService.changeMessage('note Updated')
          this.snackBar.open("Note Updated Succesfully", "close", { duration: 2500 })
        } else {
          this.snackBar.open("Note not updated", "close", { duration: 2500 })
          console.log(response);

        }
      }
    )
    this.dialog.closeAll()
  }
}
