import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { EventDemoComponent } from './event-demo/event-demo.component';
import { TwowayComponent } from './twoway/twoway.component';
import { CalcComponent } from './calc/calc.component';
import { FormsModule } from '@angular/forms';
import { EmployComponent } from './employ/employ.component';
import { EmploydropdownComponent } from './employdropdown/employdropdown.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { first } from 'rxjs';
import { LoginComponent } from './login/login.component';
// const appRoutes : Routes =[
//   {path:'',component:MenuComponent},
//   {path:'first',component:FirstComponent},
  
//   {path:'second',component:SecondComponent},
//   {path:'third',component:ThirdComponent},
//   {path:'fourth',component:FourthComponent},
//   {path:'employdropdown',component:EmploydropdownComponent},
//   {path:'calc',component:CalcComponent},
//   {path:'employ',component:EmployComponent}
  
// ]
const appRoutes : Routes =[
    {path:'',component:LoginComponent},
    {path:'menu',component:MenuComponent,children:[
      {path:'first',component:FirstComponent,outlet:'mphasis'},
      {path:'second',component:SecondComponent,outlet:'mphasis'},
      {path:'third',component:ThirdComponent,outlet:'mphasis'},
      {path:'calc',component:CalcComponent,outlet:'mphasis'}
      

    ]}

    ]





@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    EventDemoComponent,
    TwowayComponent,
    CalcComponent,
    EmployComponent,
    EmploydropdownComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
