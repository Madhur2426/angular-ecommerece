import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-s23-ultra',
  templateUrl: './s23-ultra.component.html',
  styleUrls: ['./s23-ultra.component.css']
})
export class S23UltraComponent {
  count=0;
  models: any[] = [{  
 'brand': 'Samsung',
 'modelname': 'Samsumg S23 Ultra',
 'color': 'PhantomBlack',
  'price': 139000
}
];  
constructor(private data:DataService){}
  addToCart(){
   this.data.addData("Samsung S23Ultra",139990);//Calling service method to add data to array
   alert("Samsung S23 Ultra added to your cart");//Popup message for success addition of product into cart
  }
}
