import { Component } from '@angular/core';
import { TokenstorageService } from '../tokenstorage.service';
@Component({
  selector: 'app-blog-feed',
  templateUrl: './blog-feed.component.html',

})
export class BlogFeedComponent {
  blogs:any='';
  uri:string='http://localhost:8000/blog/feed';
  constructor(private tokenService:TokenstorageService){}
  async ngOnInit(){
    const token=this.tokenService.getToken();
    const response=await fetch(this.uri,{
      method:'GET',
      credentials:'include',
      mode:'cors',
      headers:{
        'Authorization':`Bearer ${token}`
      }
    });
    this.blogs=await response.json();

  }
}
