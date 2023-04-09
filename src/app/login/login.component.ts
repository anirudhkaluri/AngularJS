import { Component, Input } from '@angular/core';
import {Router} from '@angular/router'
import { TokenstorageService } from '../tokenstorage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router,private tokenStore:TokenstorageService){}
  @Input() uri:string='http://localhost:8000/profile/login';

  username:string='';
  password:string='';
  TwoWayData:string='Hi I am two way data';

  ngOnInit():void{
   
  }

  async loginUser(){
    try{
      const response=await fetch(this.uri,{
        method:'POST',
        mode:'cors',
        credentials:'include',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({user_name:this.username,password:this.password})
      });
      const response_body=await response.json();
      if(response_body.userExists){
        this.tokenStore.setToken(response_body.jwt);
        this.router.navigate(['/home']);
      }
      else{
        console.log("user doesnt exists");
      }
   }
   catch(error){
    console.log(`ERROR WHILE LOGGING IN:`,error);
   }

  }

  usernameChange(eventData:any){ 
    this.username= (<HTMLInputElement>eventData.target).value; //eventData.target is of type <HTMLInputElement> . That target has value

    
  }

  passwordChange(eventData:any){
    this.password=(<HTMLInputElement>eventData.target).value;
  }
}
