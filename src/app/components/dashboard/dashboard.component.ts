import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showFiller = false;
 

  appTitle:string;
  constructor() { }

  ngOnInit() {
    this.appTitle="FundooNotes";
  }
  
  
  sideNavbar(){
    
  }

  onSearchChange(){

  }

  onNote() {
    this.appTitle = "Note";
}

}
