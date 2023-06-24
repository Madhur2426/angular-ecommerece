import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  title = 'BestDeal';
  redirect=false;
  Credentials=false;
  popup=false;
  constructor(private signup:DataService){}
//Creating Form Group imstance
  loginForm=new FormGroup({
    //Using validators and creating form fields and using prefilled values during launch
    user:new FormControl('m.nigam@novelvox.com',[Validators.required,Validators.email]),
    password:new FormControl('password',[Validators.required,Validators.minLength(5)]),
})

register(username:string,password:any){
  this.signup.registerUser(username,password);
  alert("Successfully Registered Please Login");
}

get user(){
  return this.loginForm.get('user');
}
get password(){
  return this.loginForm.get('password');
}
}
