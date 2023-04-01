import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { CartItemService } from '../services/cart-item.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public shoppingCart:CartItem[];
  public message:string;
  private shoppingCartService:CartItemService;

  constructor(cartItemService:CartItemService) { 
    this.shoppingCart = [];
    this.message = "";
    this.shoppingCartService = cartItemService;
  }

  ngOnInit(): void {
    this.doList();
  }

  doList() {
    this.shoppingCartService.findAll().subscribe((cartItems:CartItem[]) => {
      this.shoppingCart = cartItems;
    })
  }

  doUpdate(cartItem:CartItem, requiredQuantity:any) {
    cartItem.requiredQuantity = requiredQuantity.value;
    this.shoppingCartService.update(cartItem).subscribe(() => {
      this.message = "Required Quantity is successfully updated";
      this.doList();
    })
  }

  doDelete(cartItem:CartItem) {
    this.shoppingCartService.delete(cartItem).subscribe(() => {
      this.message = "Cart Item is successfully deleted";
      this.doList();
    })
  }

}
