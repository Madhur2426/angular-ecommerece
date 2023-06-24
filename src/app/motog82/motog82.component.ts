import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-motog82',
  templateUrl: './motog82.component.html',
  styleUrls: ['./motog82.component.css']
})
export class Motog82Component {
  priceG=19999;
  constructor(private data:DataService){}
  addToCart(){
   this.data.addData("Motorola G82",19999);
   alert("Moto G82 added to your Cart");
  }
}
