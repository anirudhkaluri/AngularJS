import { Component } from '@angular/core';
import { TokenstorageService } from '../tokenstorage.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent {
  myblogs:any=[];
  token:any=null;
  uri:string='http://localhost:8000/blog';
  constructor(private tokenService:TokenstorageService){}
  async ngOnInit(){
    this.token=this.tokenService.getToken();
    const response=await fetch(this.uri+'/home',{
      method:'GET',
      mode:'cors',
      credentials:'include',
      headers:{
        'Authorization':`Bearer ${this.token}`
      }
    });
    this.myblogs=await response.json();
  }
  async onDelete(blogid:any){
    this.myblogs=this.myblogs.filter((item:any)=>{return item._id!=blogid});
    const response=await fetch(this.uri+'/delete/'+blogid.toString(),{
      method:'DELETE',
      mode:'cors',
      credentials:'include',
      headers:{
        'Authorization':`Bearer ${this.token}`
      }
    });
  }
  onModify(blogid:any){

  }
}
