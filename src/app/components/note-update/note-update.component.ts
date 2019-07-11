import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-note-update',
  templateUrl: './note-update.component.html',
  styleUrls: ['./note-update.component.scss']
})
export class NoteUpdateComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{noteData:any}) { }

  note=this.data.noteData;
  ngOnInit() {
    console.log("data",this.data);
    
  }

}
