import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-pixel7',
  templateUrl: './pixel7.component.html',
  styleUrls: ['./pixel7.component.css']
})
export class Pixel7Component {
  price7=45999;//Assigning value to variable
  constructor(private data:DataService){}
  addToCart(){
   this.data.addData("Google Pixel 7",45999);//Calling service method to add data to array
   alert("Google Pixel 7 added to your cart");//Popup message for success addition of product into cart
  }
}
