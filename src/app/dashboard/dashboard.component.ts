import { Component, OnInit, ElementRef } from '@angular/core';
import {single} from './data';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  single: any[];
  multi: any[];

  view: any[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  paddingInBars = 0;
  legendPosition = 'below';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  constructor(private el:ElementRef) { 
    Object.assign(this, {single});
  }

  ngOnInit() {
    this.view = [this.el.nativeElement.offsetParent.clientWidth - 100, this.el.nativeElement.offsetParent.clientHeight];
    this.paddingInBars = Number(this.el.nativeElement.offsetParent.clientWidth) / 15; 
    console.log(this.view); 
  }

  ngAfterViewInit(){
      
  }
  onSelect(event) {
    console.log(event);
  }
}
