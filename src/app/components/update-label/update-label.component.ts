import { Component, OnInit, Inject } from '@angular/core';
import { Label } from 'src/app/model/label';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { LabelService } from 'src/services/label.service';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-update-label',
  templateUrl: './update-label.component.html',
  styleUrls: ['./update-label.component.scss']
})
export class UpdateLabelComponent implements OnInit {

  label:Label=new Label();


  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private labelService:LabelService,
  private dataService:DataService,private dialogBox:MatDialog) { }

  ngOnInit() {
    
  }

  onUpdateLabelofLabel(){
    if(this.label.labelName!=null){
      this.labelService.updateLabel("label/update?labelId="+this.data.labelId,this.label).subscribe(
        (response:any)=>{
          this.dataService.changeMessage("Label updated");

        }
      )
    }
    this.dialogBox.closeAll();
  }
}
