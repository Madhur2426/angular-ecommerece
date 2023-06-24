import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-samsung',
  templateUrl: './samsung.component.html',
  styleUrls: ['./samsung.component.css']
})
export class SamsungComponent {
  count=0;
     models: any[] = [{  
    'brand': 'Samsung',
    'modelname': 'Samsumg S23 Ultra',
    'color': 'PhantomBlack',
     price: 139000
}
];  
constructor(private router:Router){}
  showDetails(){
    this.router.navigate(['S23Ultra'])
  }


}
