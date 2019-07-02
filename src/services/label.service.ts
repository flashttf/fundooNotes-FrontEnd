import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../src/environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class LabelService {

  baseUrl=environment.baseUrlLabel;

  constructor(private httpClient:HttpClient) { }

  public postRequst(url:any,data:any):any{
    return this.httpClient.post(this.baseUrl+url,data,{headers:new HttpHeaders().set('token',localStorage.getItem('token'))});
  }

  public putRequest(url:any,data:any):any{
    return this.httpClient.put(this.baseUrl+url,data,{headers:new HttpHeaders().set('token',localStorage.getItem('token'))});
  }

  public deleteRequest(url:any):any{
    return this.httpClient.delete(this.baseUrl+url,{headers:new HttpHeaders().set('token',localStorage.getItem('token'))});
  }

  public getRequest(url:any):any {
    return this.httpClient.get(this.baseUrl+url,{headers:new HttpHeaders().set('token',localStorage.getItem('token'))});
  }
}
