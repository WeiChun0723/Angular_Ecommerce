import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

export const approutes:Routes = [
    { path:'home', component:ProductsComponent },
    { path:'shoppingcart', component:ShoppingCartComponent },
    { path:'registration', component:RegistrationComponent },
    { path:'login', component:LoginComponent },
    { path:'', redirectTo:'home', pathMatch:'full' }
]