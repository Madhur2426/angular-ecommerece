import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent {
  constructor(private Serice:DataService){}
  queryForm = new FormGroup({
    name: new FormControl ('', [Validators.required,Validators.minLength(5)]),
    email: new FormControl ('', [Validators.required, Validators.email]),
    message: new FormControl('',[Validators.required,Validators.minLength(5)])
  });
  ticketNumber:number=0;
help(name:string,email:string,message:string){
  this.ticketNumber=Math.random()*(Math.pow(10,17));
this.Serice.queryData(this.ticketNumber,name,email,message);
}
}