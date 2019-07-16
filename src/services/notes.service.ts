import { Injectable } from '@angular/core';


import { HttpServiceService } from './http-service.service';
import { Note } from 'src/app/model/note';



@Injectable({
  providedIn: 'root'
})
export class NotesService {
  
  
  note:Note=new Note();

  constructor(private httpservice:HttpServiceService) { }


    public createNote(data){
      console.log("Hitting Note Service");
      
     return this.httpservice.postRequest("note/create",data);
    }

    public updateNote(url:any,data:any):any{                                                                     
      console.log("Hitting Note Service");
      return this.httpservice.putRequest(url,data);
    }

    public deleteNote(url:any):any{
      return this.httpservice.deleteRequest(url);
    }

    public getNotes():any{
      return this.httpservice.getRequest("note/readNote");
    }
    
    public onArchive(url:any) {
    return this.httpservice.deleteRequest(url);
    }

   public addLabelToNote(url,data) {
    return this.httpservice.putRequest(url,data);  
  }

  public findByTitle(url:any) {
   return this.httpservice.getRequest(url);
  }
   
  
}
