import { Component, OnInit } from '@angular/core';
import { LabelService } from 'src/services/label.service';


@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  label=[];
  token:any;
  
  constructor(private labelService:LabelService) { }


  
  ngOnInit() {
    this.displayAllLabels();
  }

  displayAllLabels() {
    this.token = localStorage.getItem('token');
  this.labelService.displayLabels().subscribe(
    (Response:any)=>{
      this.label=Response;
      console.log(this.label);
      
    }
  ) 
  }

}
