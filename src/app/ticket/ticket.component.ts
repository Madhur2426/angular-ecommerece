import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit{
  admincheck:boolean=false;
  constructor(private service:DataService){}
query:any[]=[];
  ngOnInit(): void {
    this.query=this.service.getQuery();
 
  }
}
