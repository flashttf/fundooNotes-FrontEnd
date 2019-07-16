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

  public updateLabel(url:any,data:any):any{
    return this.httpService.putRequest(url,data);
  } 

  public deleteLabel(url:any):any{
    return this.httpService.deleteRequest(url);
  }

  public displayLabels():any {
    return this.httpService.getRequest("label/readAll");
  }
}
