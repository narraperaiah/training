import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployComponent } from './employ/employ.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployreactiveComponent } from './employreactive/employreactive.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployComponent,
    EmployreactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
