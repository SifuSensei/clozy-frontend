import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Ireviews, IreviewsDesc } from 'src/app/interfaces/iclothes';
import { ClothesService } from 'src/app/services/clothes.service';
import { NgbRatingConfig, NgbRatingModule, ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-allreviews',
  templateUrl: './allreviews.component.html',
  styleUrls: ['./allreviews.component.scss']
})
export class AllreviewsComponent {
  reviews : IreviewsDesc[] = []
  currentRate = 5;
  closeResult = ''
  reviewForm;
  bool = false

  constructor(private cSer: ClothesService, private aRoute: ActivatedRoute, private formBuilder:FormBuilder, private modalService: NgbModal, config: NgbRatingConfig){

    this.reviewForm = formBuilder.group({
      username: ['' , [Validators.required]],
      clothes_id: [0 , [Validators.required]],
      comment: ['' , [Validators.required]],
      star: ['' , [Validators.required]],
    })
    
    cSer.getDescReview().subscribe((result) =>{
      this.reviews = result
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
  
  
  submitReview(){
    const reviewData = this.reviewForm.value
   
    this.cSer.postReview(reviewData).subscribe((result) =>{
      console.log(result)
      this.reviewForm.reset()
      this.modalService.dismissAll()
      this.bool = true
      window.location.reload()
    })
  }
}
