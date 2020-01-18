import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadsComponent } from './leads/leads.component';
import { LeadsDetailComponent } from './leads/leads-detail/leads-detail.component';
import { DealsComponent } from './deals/deals.component';
import { DealsDetailComponent } from './deals/deals-detail/deals-detail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsDetailComponent } from './contacts/contacts-detail/contacts-detail.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivitiesDetailComponent } from './activites/activities-detail/activities-detail.component';
import { ReportsComponent } from './reports/reports.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsDetailComponent } from './projects/projects-detail/projects-detail.component';
import { ForecastComponent } from './forecast/forecast.component';
import { ListingsComponent } from './listings/listings.component';
import { ListingsDetailComponent } from './listings/listings-detail/listings-detail.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'leads', component: LeadsComponent},
  {path: 'leads/:id', component: LeadsDetailComponent},
  {path: 'deals/:id', component: DealsComponent},
  {path: 'deals/:id', component: DealsDetailComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'contacts/:id', component: ContactsDetailComponent},
  {path: 'activities', component: ActivitiesComponent},
  {path: 'activities/:id', component: ActivitiesDetailComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'reports/:id', component: ReportsComponent},
  {path: 'forecast', component: ForecastComponent},
  {path: 'reports/:id', component: ReportsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'projects/:id', component: ProjectsDetailComponent},
  {path: 'listings', component: ListingsComponent},
  {path: 'listings/:id', component: ListingsDetailComponent},
  {path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
