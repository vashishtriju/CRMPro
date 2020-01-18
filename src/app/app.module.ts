import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppMaterialModule } from './common/app-material/app-material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadsComponent } from './leads/leads.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { DepartmentComponent } from './department/department.component';
import { DealsComponent } from './deals/deals.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ForecastComponent } from './forecast/forecast.component';
import { ProjectsComponent } from './projects/projects.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { HelpComponent } from './help/help.component';
import { LeadsDetailComponent } from './leads/leads-detail/leads-detail.component';
import { DealsDetailComponent } from './deals/deals-detail/deals-detail.component';
import { ContactsDetailComponent } from './contacts/contacts-detail/contacts-detail.component';
import { ActivitiesDetailComponent } from './activites/activities-detail/activities-detail.component';
import { CommisionsComponent } from './commisions/commisions.component';
import { CommissionDetailComponent } from './commisions/commission-detail/commission-detail.component';
import { ReportsDetailComponent } from './reports/reports-detail/reports-detail.component';
import { ReportsComponent } from './reports/reports.component';
import { ProjectsDetailComponent } from './projects/projects-detail/projects-detail.component';
import { ListingsComponent } from './listings/listings.component';
import { ListingsDetailComponent } from './listings/listings-detail/listings-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeadsComponent,
    DepartmentComponent,
    DealsComponent,
    ContactsComponent,
    ActivitiesComponent,
    ForecastComponent,
    ProjectsComponent,
    CampaignsComponent,
    HelpComponent,
    LeadsDetailComponent,
    DealsDetailComponent,
    ContactsDetailComponent,
    ActivitiesDetailComponent,
    CommisionsComponent,
    CommissionDetailComponent,
    ReportsDetailComponent,
    ReportsComponent,
    ProjectsDetailComponent,
    ListingsComponent,
    ListingsDetailComponent
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
