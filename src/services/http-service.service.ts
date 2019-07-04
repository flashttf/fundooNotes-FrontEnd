import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
 

@Injectable({
  providedIn: 'root'
})

 export class HttpServiceService {
  baseurl = environment.baseUrl;



  constructor(private http: HttpClient,
    private route: ActivatedRoute ) { }
  token = this.route.snapshot.paramMap.get('token');

  public postRequest(url, data):any {
   
    console.log("Hitting Service");
    return this.http.post(this.baseurl + url, data,{ headers: new HttpHeaders().set("token",localStorage.getItem('token')) });
  }

  public putRequest(url: any,data:any): any {
    return this.http.put(this.baseurl + url, data, { headers: new HttpHeaders().set("token", localStorage.getItem('token')) });
  }
  public putRequestforget(url: any,data:any): any {
    
    return this.http.put(this.baseurl + url,data, { headers: new HttpHeaders().set("token", localStorage.getItem('token')) });
}

  public deleteRequest(url: any): any {
    return this.http.delete(this.baseurl + url,{ headers: new HttpHeaders().set("token", localStorage.getItem('token')) });
  }

  public getRequest(url) {
    return this.http.get(this.baseurl + url, { headers: new HttpHeaders().set("token", localStorage.getItem('token')) });
  }

}