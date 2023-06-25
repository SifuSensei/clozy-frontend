import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Iclothes } from 'src/app/interfaces/iclothes';
import { ClothesService } from 'src/app/services/clothes.service';
import { NgbOffcanvas, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss'],
})
export class SeasonsComponent implements OnInit{
  seasons : Iclothes[] = []
  

  constructor(private cSer: ClothesService,private http: HttpClient, private cartSer: CartService, private Route: ActivatedRoute, private route: Router){
    
    const s_id = this.Route.snapshot.paramMap.get('s_id')
      this.cSer.womensCategory(s_id).subscribe((result) =>{
        this.seasons = result
    })

}
addToCart(order: any){
  if(!this.cartSer.inCart(order)){
    order.quantity = 1;
    this.cartSer.addToCart(order)
    
  }}


ngOnInit(): void {
}



}
