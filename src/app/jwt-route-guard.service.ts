import { Injectable } from '@angular/core';
import {Router,UrlTree} from '@angular/router'
import { TokenstorageService } from './tokenstorage.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JwtRouteGuardService {

  constructor(private router:Router,private tokenStore:TokenstorageService) { }
  
  canActivate():  | Observable<boolean | UrlTree>
  | Promise <boolean | UrlTree>
  | boolean
  | UrlTree{
    const token:string|null=this.tokenStore.getToken();
    console.log('we are in canActivate');
    if(token===null || token===''){
      console.log('routing to login');
      console.log('the jwt token is',token);
      this.router.navigate(['/login']);
      return false;
    }
      console.log('the jwt token is',token);
      return true;
  }
}
