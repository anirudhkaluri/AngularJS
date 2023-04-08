import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() uri:string;
  username:string='';
  password:string='';
  TwoWayData:string='Hi I am two way data';
  ngOnInit():void{
    this.uri=this.uri+'/login';
  }

  async onSubmit(eventData:any){
    const response=await fetch()
  }

  usernameChange(eventData:any){ 
    this.username= (<HTMLInputElement>eventData.target).value; //eventData.target is of type <HTMLInputElement> . That target has value
    console.log(this.username);
    
  }

  passwordChange(eventData:any){
    this.password=(<HTMLInputElement>eventData.target).value;
  }
}
