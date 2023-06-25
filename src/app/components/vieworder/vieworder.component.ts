import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iclothes, Iorders } from 'src/app/interfaces/iclothes';
import { ClothesService } from 'src/app/services/clothes.service';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.scss']
})
export class VieworderComponent {
orders : Iorders[] = []
or! : Iorders
clothes : Iclothes[] = []

constructor(private Route: ActivatedRoute, private cSer: ClothesService){
  const o_id  = this.Route.snapshot.paramMap.get('o_id')
  cSer.getOrderId(o_id).subscribe((result) =>{
    this.or = result
  })

  cSer.getClothes().subscribe((result) =>{
    this.clothes = result
  })
  cSer.getOrders().subscribe((result) =>{
    this.orders = result
  })
}
}
