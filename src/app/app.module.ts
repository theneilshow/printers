import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MachinesComponent } from './machines/machines.component';
import { PrintComponent } from './print/print.component';
import { MaintainComponent } from './maintain/maintain.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PrinterComponent } from './printer/printer.component';
import { NavComponent } from './nav/nav.component';
import { DataService } from './data.service';
import { AdminComponent } from './admin/admin.component';
import { AddPrinterComponent } from './add-printer/add-printer.component';



@NgModule({
  declarations: [
    AppComponent,
    MachinesComponent,
    PrintComponent,
    MaintainComponent,
    WelcomeComponent,
    PrinterComponent,
    NavComponent,
    AdminComponent,
    AddPrinterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
