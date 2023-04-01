import { Product } from "./product";

export class CartItem {

    public constructor(public id:number, 
        public product:Product, public requiredQuantity:number) {
    }

}
