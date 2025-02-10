import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [

  ],
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    LoginComponent,
    SignupComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
