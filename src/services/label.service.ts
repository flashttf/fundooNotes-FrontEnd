import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../src/environments/environment';
import { HttpServiceService } from './http-service.service';
 
@Injectable({
  providedIn: 'root'
})
export class LabelService {



  constructor(private httpService:HttpServiceService) { }

  public createLabel(data:any):any{
    return this.httpService.postRequest("label/create",data);
  }

  public updateLabel(data:any):any{
    return this.httpService.putRequest("label/update",data);
  }

  public deleteLabel():any{
    return this.httpService.deleteRequest("label/delete");
  }

  public displayLabels():any {
    return this.httpService.getRequest("label/readAll");
  }
}
