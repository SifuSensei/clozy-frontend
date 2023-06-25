import { Component, Input } from '@angular/core';
import { Iclothes } from 'src/app/interfaces/iclothes';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-sfilter',
  templateUrl: './sfilter.component.html',
  styleUrls: ['./sfilter.component.scss']
})
export class SfilterComponent {
@Input() Seasonings!: Iclothes

constructor(private cartSer: CartService){

}
addToCart(order:any){
    if(!this.cartSer.inCart(order)){
      order.quantity = 1;
      this.cartSer.addToCart(order)
    }
}
}
