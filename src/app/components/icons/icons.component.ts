import { Component, OnInit, Input} from '@angular/core';
import { Note } from 'src/app/model/note';
import { FormControl } from '@angular/forms';
import { DateReminder } from 'src/app/model/date-reminder';
import { MatSnackBar, MatDialog } from '@angular/material';
import { NotesService } from 'src/services/notes.service';
import { DataService } from 'src/services/data.service';
import { LabelService } from 'src/services/label.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() noteInfo

  label:[];
  // note:Note=new Note();
  toggle:boolean= true;
  message:string;
 


  

  constructor(private snackbar:MatSnackBar,private noteService:NotesService,private dataService:DataService,
    private labelService:LabelService,private dialog:MatDialog) { }

  ngOnInit() {
    this.getAllLabels();

    console.log("===========================",this.noteInfo);
    

  }

  onChangeColor(){
    console.log("Note Color");
    
  }

  arrayColor=[
    [
      {
        name: "white", hexcode: " #ffffff "
      }
      ,
      {
        name: "cyan", hexcode: " #00FFFF "
      },

      {
        name: "red", hexcode: "#ff0000"
      },

    ],
    [
      {
        name: "green", hexcode: " #008000 "
      },
      {
        name: "orange", hexcode: " #FFA500 "
      }
      ,
      {
        name: "yellow", hexcode: "#ffff00"
      }
],
]

setColor(color:any){
console.log(color);
this.noteService.updateNote("",color).subscribe(
  (response:any)=>{
    if(response.statusCode==200){
      this.dataService.changeMessage('color');
      this.dataService.changeMessage("name");
      console.log(response);
      this.snackbar.open("Note Color set.","close",{duration:2500});
      
    }else{
      this.snackbar.open("Couldnt Set NoteColor.Somethings Wrong","close",{duration:2500});
    }
  }
)
}

onArchive(){
  this.noteService.onArchive("note/archive?noteId="+this.noteInfo.noteId).subscribe(
    (response:any)=>{
      console.log(this.noteInfo.noteId);
      
      if(response.statusCode==200){
        this.dataService.changeMessage('archive');
        this.snackbar.open("Note archived","undo",{duration:2500});
      }else{
        this.snackbar.open("Note archive failed","undo",{duration:2500});
      }
    }
  )
}

onDelete(){
  console.log(this.noteInfo);
  
  this.noteService.deleteNote("note/delete?noteId="+this.noteInfo.noteId).subscribe(
    (response:any)=>{
      console.log("Note Id="+this.noteInfo);
      
      if(response.statusCode==200){
        
        this.dataService.changeMessage('delete');
        this.snackbar.open("Note deleted.","close",{duration:2500});
      }else{
        console.log(this.noteInfo.noteId);
        this.snackbar.open("Note not deleted","close",{duration:2500});
      }
    }
  )
}

labels:[]

datePicker(){
  console.log("Remiender set");
  
}


  addLabel(labels:any){
    console.log(labels);
    
  }

  getAllLabels() {
    this.labelService.displayLabels().subscribe(
      (response:any)=>{
        this.label=response;
        console.log(this.label);
        
      }
    )
  }


  onRemind(){
    console.log("reminder set");
    
  }
}
