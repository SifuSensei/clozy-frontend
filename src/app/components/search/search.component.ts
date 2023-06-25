import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iclothes } from 'src/app/interfaces/iclothes';
import { CartService } from 'src/app/services/cart.service';
import { ClothesService } from 'src/app/services/clothes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  search : Iclothes[] = []
  constructor(private cSer: ClothesService, private route: ActivatedRoute, private cartSer: CartService){
    const s_id = this.route.snapshot.paramMap.get('s_id')

    cSer.getFilter(s_id).subscribe((result) =>{
      this.search = result
     
    })
  }
  addToCart(order: any){
    if(!this.cartSer.inCart(order)){
      order.quantity = 1;
      this.cartSer.addToCart(order)
    }
  }
}
