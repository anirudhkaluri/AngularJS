import { Component } from '@angular/core';
import { TokenstorageService } from '../tokenstorage.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent {
  myblogs:any=[];
  token:any=null;
  uri:string='http://localhost:8000/blog/home';
  constructor(private tokenService:TokenstorageService){}
  async ngOnInit(){
    this.token=this.tokenService.getToken();
    const response=await fetch(this.uri,{
      method:'GET',
      mode:'cors',
      credentials:'include',
      headers:{
        'Authorization':`Bearer ${this.token}`
      }
    });
    this.myblogs=await response.json();
  }
  onDelete(blogid:any){

  }
  onModify(blogid:any){

  }
}
