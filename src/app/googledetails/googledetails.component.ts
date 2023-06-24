import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-googledetails',
  templateUrl: './googledetails.component.html',
  styleUrls: ['./googledetails.component.css']
})
export class GoogledetailsComponent {
  price7Pro=68990;  
  constructor(private data:DataService){}
  addToCart(){
   this.data.addData("Google Pixel 7Pro",68990);
   alert("Google Pixel 7 Pro added to your cart");
  }
}
