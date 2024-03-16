import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SellerServiceService } from './seller-service.service';
import { Observable } from 'rxjs';

// export const authGuard: CanActivateFn = (route, state) => {
//   const token = localStorage.getItem('token');
//   const router = inject(Router);
//   console.log('token',token);
//   if(token){
//     return true;
//   } else {
//     router.navigate(['seller-home']);
//     return false;
//   }
// };
 
@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  constructor(private sellerService:SellerServiceService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(localStorage.getItem('seller')){
      return true;
    }
    return this.sellerService.isSellerLoggedIn;
  }
}