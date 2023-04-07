import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:string='';
  password:string='';
  TwoWayData:string='Hi I am two way data';
  ngOnInit():void{
  }

  onSubmit(eventData:any){
    
  }

  usernameChange(eventData:any){ 
    this.username= (<HTMLInputElement>eventData.target).value; //eventData.target is of type <HTMLInputElement> . That target has value
    console.log(this.username);
    
  }

  passwordChange(eventData:any){
    this.password=(<HTMLInputElement>eventData.target).value;
  }
}
