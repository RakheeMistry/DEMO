import { Component, OnInit } from '@angular/core';
import { SellerServiceService } from '../services/seller-service.service';
import { Router } from '@angular/router'
import { SU } from '../dataInterface';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{

  constructor(private sell:SellerServiceService,private route:Router){ }

  showLogin = false;
  authError:string = '';

  ngOnInit(): void { 
    //this.sell.reloadSeller();
   }

  signup(data:SU):void{ 
    console.log(data);
    this.sell.sellerSignUp(data)
  }

  login(data:SU):void{
    this.authError = " ";
    console.log(data);
    this.sell.sellerLogin(data);
    this.sell.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or password is not correct"
      }
    })
  }

  openLogin(){
    this.showLogin = true;
  }

  openSignUp(){
    this.showLogin = false;
  }
} 


