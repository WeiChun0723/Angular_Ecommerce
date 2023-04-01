import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Component({
  // selector: 'app-product-list',
  // selector: '[app-product-list]',
  selector: '.app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  public product!:Product;

  @Input()
  public index:number = 0;

  @Output()
  public notify:EventEmitter<CartItem> = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(product:Product, requiredQuantity:any) {
    let cartItem:CartItem = {
      id:0,
      product:product,
      requiredQuantity:requiredQuantity.value
    }
    this.notify.emit(cartItem);
    requiredQuantity.value = "";
  }

}
