import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TokenstorageService } from './tokenstorage.service';
import { JwtRouteGuardService } from './jwt-route-guard.service';
import { BlogFeedComponent } from './blog-feed/blog-feed.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
    NavbarComponent,
    HomepageComponent,
    BlogFeedComponent,
    CreateBlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    TokenstorageService,
    JwtRouteGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
