import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomepageComponent } from '../homepage/homepage.component';

const routes:Routes=[
  {path:'/login',component:LoginComponent},
  {path:'/home',component:HomepageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
