import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { authGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent },
  {path:'seller-auth',component: SellerAuthComponent},
  {path:'seller-home',component: SellerHomeComponent,canActivate:[authGuard]},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
