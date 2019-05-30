import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  clients:any= [];
  constructor() { }

  ngOnInit() {
    this.loadClients();
  }
  loadClients(){
    this.clients = [{
      id: 1,
      firstName: "Riju",
      lastName: 'Vashisht'
    },
    { id: 2,
      firstName: "Loveleen",
      lastName: 'Dhiman'
    },
    {
      id: 3,
      firstName: "Raman",
      lastName: 'Dua'
    },
    {
      id: 4,
      firstName: "Riju",
      lastName: 'Vashisht'
    },
    {
      id: 5,
      firstName: "Loveleen",
      lastName: 'Dhiman'
    },
    {
      id: 6,
      firstName: "Raman",
      lastName: 'Dua'
    },{
      id: 7,
      firstName: "Riju",
      lastName: 'Vashisht'
    },
    {
      id: 8,
      firstName: "Loveleen",
      lastName: 'Dhiman'
    },
    {
      id: 9,
      firstName: "Raman",
      lastName: 'Dua'
    },{
      id: 10,
      firstName: "Riju",
      lastName: 'Vashisht'
    },
    {
      id: 11,
      firstName: "Loveleen",
      lastName: 'Dhiman'
    },
    {
      id: 12,
      firstName: "Raman",
      lastName: 'Dua'
    },{
      id: 13,
      firstName: "Riju",
      lastName: 'Vashisht'
    },
    {
      id: 14,
      firstName: "Loveleen",
      lastName: 'Dhiman'
    },
    {
      id: 15,
      firstName: "Raman",
      lastName: 'Dua'
    }
  ]
}


}
