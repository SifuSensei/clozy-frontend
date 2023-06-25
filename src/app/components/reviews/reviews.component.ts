import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iclothes, Icreview, Ireviews } from 'src/app/interfaces/iclothes';
import { NgbRatingConfig, NgbRatingModule, ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClothesService } from 'src/app/services/clothes.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
review! : Icreview
reviewForm;
closeResult = '';
rev : Ireviews [] = []
currentRate = 5;
bool = false


constructor(private cloSer: ClothesService, private aRoute: ActivatedRoute, private formBuilder: FormBuilder, config: NgbRatingConfig, private modalService: NgbModal, private router: Router, private cartSer: CartService){
const cl_id = this.aRoute.snapshot.paramMap.get('cl_id')
cloSer.getReview(cl_id).subscribe((result) =>{
  this.review = result
})

this.reviewForm = formBuilder.group({
  username: ['' , [Validators.required]],
  clothes_id: [0 , [Validators.required]],
  comment: ['' , [Validators.required]],
  star: ['' , [Validators.required]],
})

cloSer.getAllReview().subscribe((result) =>{
  this.rev = result
})


config.max = 5;
		config.readonly = true;
}

open(content: any) {
  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
    (result) => {
      this.closeResult = `Closed with: ${result}`;
    }
  );
}
addToCart(order: any){
  if(!this.cartSer.inCart(order)){
    order.quantity = 1;
    this.cartSer.addToCart(order)
  }
  
}
submitReview(){
  const reviewData = this.reviewForm.value
  reviewData.clothes_id = this.review.id
  this.cloSer.postReview(reviewData).subscribe((result) =>{
    console.log(result)
    this.reviewForm.reset()
    this.modalService.dismissAll()
    this.bool = true
    window.location.reload()
  })
}

}
