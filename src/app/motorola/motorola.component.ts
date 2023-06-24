import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-motorola',
  templateUrl: './motorola.component.html',
  styleUrls: ['./motorola.component.css']
})
export class MotorolaComponent {
priceG=19999;//Assigning value to variable

constructor(private router:Router){}
  showDetails(){
    this.router.navigate(['g82']);//routing to motog82 component
  }
}
