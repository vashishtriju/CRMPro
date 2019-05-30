import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppMaterialModule } from './common/app-material/app-material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadsComponent } from './leads/leads.component';
import { CustomersComponent } from './customers/customers.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import {OverlayPanelModule} from 'primeng/overlaypanel';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeadsComponent,
    CustomersComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    NgxChartsModule,
    OverlayPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
