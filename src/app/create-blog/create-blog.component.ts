import { Component, EventEmitter, Output } from '@angular/core';
import { TokenstorageService } from '../tokenstorage.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',

})
export class CreateBlogComponent {
  blog_title:string='';
  blog_content:string='';
  token:any='';
  uri:string='http://localhost:8000/blog/add';
  @Output() dataevent=new EventEmitter();
  constructor(private tokenService:TokenstorageService){}
  async onSubmit(){
    this.token=this.tokenService.getToken();
    const response=await fetch(this.uri,{
      mode:'cors',
      credentials:'include',
      method:'POST',
      headers:{
        'Authorization':`Bearer ${this.token}`,
        'content-type':'application/json'
      },
      body:JSON.stringify({blog_title:this.blog_title,blog_content:this.blog_content})
    });
    const blog_added=await response.json();
    this.dataevent.emit(blog_added);
  } 

  onTitleChange(eventData:any){
    this.blog_title=(<HTMLInputElement>eventData.target).value;
  }

  onContentChange(eventData:any){
    this.blog_content=(<HTMLInputElement>eventData.target).value;
  }
}
