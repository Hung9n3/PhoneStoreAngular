import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { CommonModule } from '@angular/common';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './Routing/app-routing.module';

import { TopSaleComponent } from './top-sale/top-sale.component';
import { AppComponent } from './app.component';
import { LandingButtonComponent } from './landing-button/landing-button.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    TopSaleComponent,
    LandingButtonComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
