import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
constructor(private router: Router){}

enterCart(){
  this.router.navigate(['cart']);
}
comparison(){
  this.router.navigate(['comparison']);
}
display(search:String){
 if(search=="Motorola g82")
  this.router.navigate(['g82']);
 
 else if(search=="Samsung S23Ultra")
 this.router.navigate(['S23Ultra']);

 else if(search=="Google Pixel 7")
 this.router.navigate(['pixel7']);
 
 else if(search=="Google Pixel 7Pro")
 this.router.navigate(['googledetails']);

else
 this.router.navigate(['notfound']);
}
needHelp(){
  this.router.navigate(['query']);
}
tickets(){
  this.router.navigate(['ticket']);
}
}
