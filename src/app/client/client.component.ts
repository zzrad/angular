import { Component, OnInit } from '@angular/core';
import { Iclient } from '../iclient';
import { DataService } from '../data.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  myClients: Iclient[];

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.getClients();
  }
  getClients(): void {
    this.dataservice.getClients().subscribe(
      (data) => this.myClients = data.Iclient ,
      (err) => console.log('erreur')
    );
  }

}
