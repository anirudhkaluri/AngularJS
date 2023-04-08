import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenstorageService {
  private token:string|null;
  constructor() { 
    this.token=null;
  }
  setToken(str:string|null){
    this.token=str;
  }
  getToken(){
    return this.token;
  }
}
