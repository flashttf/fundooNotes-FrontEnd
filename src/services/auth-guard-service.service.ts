import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpServiceService } from '../services/http-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService  implements CanActivate{
  
  constructor(private httpService: HttpServiceService, private router: Router) { }

  canActivate() {
    if(localStorage.getItem('token')){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }

}
