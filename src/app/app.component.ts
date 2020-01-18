import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRMPro';
  links: any = [];

  constructor() {
    this.loadLinks();
  }
  loadLinks() {
    this.links = [{
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      label: 'Leads',
      route: 'leads'
    },
    {
      label: 'Department',
      route: 'department'
    },
      {
        label: 'Deals',
        route: 'deals'
      },
      {
        label: 'Contacts',
        route: 'contacts'
      },
      {
        label: 'Activities',
        route: 'activities'
      },
      {
        label: 'Reports',
        route: 'reports'
      },
      {
        label: 'Forecasts',
        route: 'forecasts'
      },
      {
        label: 'Projects',
        route: 'projects'
      },
      {
        label: 'Signup',
        route: 'signup'
      },
      {
        label: 'Login',
        route: 'login'
      }];
  }
}
