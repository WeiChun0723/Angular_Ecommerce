import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.css']
})
export class ProductGalleryComponent implements OnInit {

  @Input()
  public product?:Product;

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
