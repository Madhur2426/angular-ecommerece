import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  total :number = 0;//variable to store total cost of the cart
  finalAmount:number=0;//variable to store final Calculated amount as returned ny the function totalcart
  numberOfItems:number=0;//variable to store numbers of items present in the cart
  ngOnInit(): void {
    this.getData();//calling Get Data function to get the data of the service
    this.finalAmount=this.totalCart();//calling totalcart function and storing in the final amount
  }
  cart:any[string|number]=[];//creating empty to store service data
  constructor(private myService:DataService,private router:Router){}
  totalCart() {
    // Reset total and numberOfItems
    this.total = 0;
    this.numberOfItems = 0;
  
    // Traverse array and calculate total
    for (let i = 1; i < this.cart.length; i += 2) {
      this.total += this.cart[i]; // Access price at odd index
      this.numberOfItems++; // Count number of items
    }
  
    return this.total; // Return total of prices at odd indexes
  }
  getData(){
    this.cart=this.myService.getCart();//storing service data in the cart variable
  }
  deleteCartItem(item:any[]): void {
    this.myService
    const index = this.cart.indexOf(item);
    if (index !== -1) {
      this.cart.splice(index,1);  // 1= number of elements to be removed
      this.cart.splice(index,1);
      this.totalCart();
    }
}

}