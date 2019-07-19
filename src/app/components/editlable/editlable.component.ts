import { Component, OnInit } from '@angular/core';
import { Label } from 'src/app/model/label';
import { FormControl } from '@angular/forms';
import { MatSnackBar, MatDialog } from '@angular/material';
import { LabelService } from 'src/services/label.service';
  
import { DataService } from 'src/services/data.service';
import { UpdateLabelComponent } from '../update-label/update-label.component';

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
  data: any;

  constructor(private snackbar:MatSnackBar,private labelService:LabelService,
    private dataService:DataService,private dialogBox:MatDialog) { }

  ngOnInit() {
    this.getAllLabels();
  }

  onClose(){
    if(this.label.labelName!=null){
      this.labelService.createLabel(this.label).subscribe(
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
   
    this.dialogBox.closeAll();
  }
  getAllLabels() {
    this.labelService.displayLabels().subscribe(
      (Response:any)=>{
      
        
        this.labels=Response;
        console.log("labels on dashboard-->",Response);
       
      }
    )
  }

  onUpdateLabel(data:any){
    this.dialogBox.open(UpdateLabelComponent,
      {
        height:"250px",
        width:"180px",
        data:{
          labelId:data.labelId
        }
      })
    
      
  }
}
