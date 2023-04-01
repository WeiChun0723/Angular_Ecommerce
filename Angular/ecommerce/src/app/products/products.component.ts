import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { CartItemService } from '../services/cart-item.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products:Product[];
  public colspan:number = 2;
  public isGallery:boolean = true;
  public searchResults:Product[] = [];
  public shoppingCart:CartItem[] = [];

  private productService:ProductService;
  private cartItemService:CartItemService;

  constructor(productService:ProductService, cartItemService:CartItemService) { 
    this.products = [];
    this.productService = productService;
    this.cartItemService = cartItemService;
  }

  ngOnInit(): void {
    this.productService.findAll().subscribe((products:Product[]) => {
      this.products = products;
    })
    this.cartItemService.findAll().subscribe((cartItems:CartItem[]) => {
      this.shoppingCart = cartItems;
    })
  }

  doChangeView() {
    // we are not triggering angular to re-render the page
    // which means the properties inside the class is being monitored
    // if a variable gets modified the html portion related to those variables
    // are re-rendered automatically
    this.isGallery = !this.isGallery;
  }

  doSearch(event:any) {
    let searchkeyword:string = event.target.value;
    if (searchkeyword !== "") {
      let regExp:RegExp = new RegExp("^" + searchkeyword, 'i');
      this.searchResults = this.products.filter((product:Product) => {
        return regExp.test(product.name);
      })
    } else {
      this.searchResults = [];
    }
  }

  addToCart(cartItem:CartItem) {
    this.cartItemService.save(cartItem).subscribe((newCartItem:CartItem) => {
      this.shoppingCart.push(newCartItem);
    })
  }

}
