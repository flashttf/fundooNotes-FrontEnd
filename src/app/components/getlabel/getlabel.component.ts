import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { LabelService } from 'src/services/label.service';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-getlabel',
  templateUrl: './getlabel.component.html',
  styleUrls: ['./getlabel.component.scss']
})
export class GetlabelComponent implements OnInit {

  label:[];
  message:string;

  constructor(private snackbar:MatSnackBar,private labelService:LabelService,
    private dataService:DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(
      message=>{;this.message,this.getAllLabels()}
    )
  }

  getAllLabels(){
    this.labelService.displayLabels().subscribe(
      (response:any)=>{
        this.label=response;
      }
    )
  }

  updateLabel(label:any){
    this.labelService.updateLabel("label/update?labelId="+label.labelId,label).subscribe(
      (response:any)=>{
        if(response.statusCode==200){
          this.dataService.changeMessage('Label Updated');
          this.snackbar.open(response.statusMessage,"close",{duration:2500})
        }else{
          this.snackbar.open(response.statusMessage,"close",{duration:2500})
        }
      }
    )
  }

  delete(label:any){
    this.labelService.deleteLabel("delete?labelId="+label.labelId).subscribe(
      (response:any)=>{
        if(response.statusCode==200){
          this.dataService.changeMessage("delete label");
          this.snackbar.open(response.statusMessage,"close",{duration:1500})
        }else{
          this.snackbar.open(response.statusMessage,"close",{duration:1500})
        }
      }
    )
  }

}
