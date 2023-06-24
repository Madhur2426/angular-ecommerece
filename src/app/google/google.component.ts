import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent {
  price7Pro= 68990;
  price7=45999;
  
  constructor(private router:Router){}
  details7Pro(){
    this.router.navigate(['googledetails']);//Navigating to cart component through routing
  }
  details7(){
    this.router.navigate(['pixel7']);//Navigating to cart component through routing
  }
}
