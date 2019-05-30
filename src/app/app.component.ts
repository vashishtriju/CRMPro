import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRMPro';
  links : any = [];

  constructor(){
    this.loadLinks();
  }
  loadLinks(){
    this.links = [{
      "label": "Dashboard",
      "route": "dashboard"
    },
    {
      "label": "Customers",
      "route": "customers"
    },
    {
      "label": "Leads",
      "route": "leads"
    }]
  }
}
