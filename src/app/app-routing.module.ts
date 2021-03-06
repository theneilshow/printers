import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintComponent } from './print/print.component';
import { MaintainComponent } from './maintain/maintain.component';
import { PrinterComponent } from './printer/printer.component';
import { AddPrinterComponent } from './add-printer/add-printer.component';

const routes: Routes = [
  { path: 'printer/:id/print', component: PrintComponent },
  { path: 'printer/:id/maintain', component: MaintainComponent},
  { path: 'printer/:id', component: PrinterComponent },
  { path: 'addPrinter', component: AddPrinterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
