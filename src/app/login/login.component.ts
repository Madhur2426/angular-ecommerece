import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  title = 'BestDeal';
  redirect=false;
  Credentials=false;
  constructor(private router: Router,private signup: DataService){}

  ngOnInit(): void {
  }
  register:any[]=[];
//Creating Form Group imstance
  loginForm=new FormGroup({
    //Using validators and creating form fields and using prefilled values during launch
    user:new FormControl('m.nigam@novelvox.com',[Validators.required,Validators.email]),
    password:new FormControl('password',[Validators.required,Validators.minLength(5)]),
})

login(username:string,password:string):boolean{
  this.register=this.signup.getregistered();
  for(let i=0;i<=this.register.length;i++){
    if(username==this.register[i]&&password==this.register[i+1]){
    this.router.navigate(['dashboard']);
    return true;
    }
  }
  this.Credentials=true;
   return false;
}
get user(){
  return this.loginForm.get('user');
}
get password(){
  return this.loginForm.get('password');
}
}
