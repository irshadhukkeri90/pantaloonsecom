import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { PaymentCheckoutComponent } from './Components/payment-checkout/payment-checkout.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { SignupComponent } from './Components/signup/signup.component';



const routes: Routes = [
  {path:'', component: HomeComponent,pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'checkout', component: CheckoutComponent},
  {path:'signup', component: SignupComponent},
  {path:'payment', component: PaymentCheckoutComponent},
  {path:'product', component: ProductDetailComponent},
  {path:'**', component: NotFoundPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
