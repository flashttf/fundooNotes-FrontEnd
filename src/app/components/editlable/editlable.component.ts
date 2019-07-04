import { Component, OnInit } from '@angular/core';
import { Label } from 'src/app/model/label';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { LabelService } from 'src/services/label.service';
  
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-editlable',
  templateUrl: './editlable.component.html',
  styleUrls: ['./editlable.component.scss']
})
export class EditlableComponent implements OnInit {

  label:Label=new Label();
  labels:any[];
  message:string;
  
  labelName=new FormControl(this.label.labelName);

  constructor(private snackbar:MatSnackBar,private labelService:LabelService,
    private dataService:DataService) { }

  ngOnInit() {
  }

  onClose(){
    if(this.label.labelName!=null){
      this.labelService.updateLabel(this.label).subscribe(
      (Response:any)=>{
        if(Response.statusCode==200){
          this.dataService.changeMessage("label");
          this.snackbar.open(Response.statusMessage,"undo",{duration:2500});
        }
        else{
          this.snackbar.open(Response.statusMessage,"close",{duration:2500})
        }
      }
      )
    }
    else{
      this.snackbar.open("Label Cannot Be Empty","close",{duration:2500})
    }
  }
}
