import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpServiceService } from './http-service.service';



@Injectable({
  providedIn: 'root'
})
export class NotesService {

  

  constructor(private httpservice:HttpServiceService) { }


    public createNote(data){
      console.log("Hitting Note Service");
      
     return this.httpservice.postRequest("note/create",data);
    }

    public updateNote(data:any):any{
      console.log("Hitting Note Service");
      return this.httpservice.putRequest("note/update",data);
    }

    public deleteNote():any{
      return this.httpservice.deleteRequest("note/delete");
    }

    public getNotes():any{
      return this.httpservice.getRequest("note/readNote");
    }
}
