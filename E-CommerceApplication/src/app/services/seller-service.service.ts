import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SU, login } from '../dataInterface';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SellerServiceService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);
  constructor(private http: HttpClient, private route: Router) { }

  sellerSignUp(data: SU) {
    this.http
      .post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
        console.log(result);
        // this.isSellerLoggedIn.next(true);
        if (result) {
          localStorage.setItem("seller", JSON.stringify(result.body))
          this.route.navigate(['seller-home']);
        }
      });
  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.route.navigate(['seller-home']);
    }
  }

  sellerLogin(data: login) {
    console.log(data);
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
      { observe: 'response' }).subscribe((result: any) => {
        console.warn(result);
        if (result && result.body && result.body.length) {
          console.warn("seller loggedIn");
          localStorage.setItem("seller", JSON.stringify(result.body))
          this.route.navigate(['seller-home']);
        }
        else {
          console.warn("seller login failed");
          this.isLoginError.emit(true);
        }
      })
  }
}