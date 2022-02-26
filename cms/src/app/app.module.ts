import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceptOrRejectOrderComponent } from './accept-or-reject-order/accept-or-reject-order.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';

import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomershowComponent } from './customershow/customershow.component';
import { OrdersComponent } from './orders/orders.component';
import { FormsModule } from '@angular/forms';
import { ShowrestaurantComponent } from './showrestaurant/showrestaurant.component';
import { ShowallcustomerComponent } from './showallcustomer/showallcustomer.component';
import { ShowcustomerwalletComponent } from './showcustomerwallet/showcustomerwallet.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { VendordashboardComponent } from './vendordashboard/vendordashboard.component';
import { ShowvendorComponent } from './showvendor/showvendor.component';
import { VendorordersComponent } from './vendororders/vendororders.component';
import { VendorpendingsComponent } from './vendorpendings/vendorpendings.component';

const appRoutes : Routes =[
  {path:'',component:HomepageComponent},
  {path:'customerlogin',component:CustomerloginComponent},
    {path:'vendorlogin',component:VendorloginComponent},
    {path:'vendordashboard',component:VendordashboardComponent},
    {path:'placeorder',component:PlaceorderComponent},
    
    {path:'customerdashboard',component:CustomerdashboardComponent,
    children :[
      {path:'showrestaurant',component:ShowrestaurantComponent,outlet :'mphasis'},
      {path:'showallcustomer',component:ShowallcustomerComponent,outlet :'mphasis'},
      {path:'showcustomerwallet',component:ShowcustomerwalletComponent,outlet :'mphasis'},
      {path:'placeorder',component:PlaceorderComponent,outlet :'mphasis'}
    ]
  },
  {path:'vendordashboard',component:VendordashboardComponent,children:[
  {path:'showvendor',component:ShowvendorComponent,outlet:'mphasis'},
  {path:'vendororders',component:VendorordersComponent,outlet:'mphasis'},
  {path:'vendorpendings',component:VendorpendingsComponent,outlet:'mphasis'}

  ]},
]





@NgModule({
  declarations: [
    AppComponent,
    AcceptOrRejectOrderComponent,
    CustomerdashboardComponent,
    
    CustomerloginComponent,
    CustomershowComponent,
    OrdersComponent,
    ShowrestaurantComponent,
    ShowallcustomerComponent,
    ShowcustomerwalletComponent,
    PlaceorderComponent,
    HomepageComponent,
    VendorloginComponent,
    VendordashboardComponent,
    ShowvendorComponent,
    VendorordersComponent,
    VendorpendingsComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
  FormsModule,
  RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
