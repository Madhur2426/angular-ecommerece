import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService { 
  cartData:any[]=[];//Crating array to store Cart details
  register:any[]=[];
  query:any[]=[];
  constructor() { }
  addData(model:string,price:number){
    this.cartData.push(model,price);//Adding values to cart Data
  }
  getCart():any[]{
    return this.cartData;//Returning Cart data
  }
  registerUser(username:string,password:any){
       this.register.push(username,password);
       console.log(this.register);
  }
  getregistered():any[]{
    return this.register;
  }
  queryData(ticketNumber:number,name:string,email:string,message:any){
    this.query.push(ticketNumber,name,email,message);
    console.log(this.query);
  }
  getQuery():any[]{
    return this.query;
  }
}
