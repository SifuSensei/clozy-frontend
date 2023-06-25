import { Component, ViewEncapsulation, HostListener } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCube, SwiperOptions, Swiper, EffectFlip, EffectCards, EffectCoverflow } from 'swiper';
import { trigger, style, animate, transition } from '@angular/animations';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCube, EffectFlip, EffectCards, EffectCoverflow]);

@Component({
  selector: 'app-mlanding',
  templateUrl: './mlanding.component.html',
  styleUrls: ['./mlanding.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ transform: 'translateX(-90%)' }),
        animate('2000ms', style({ transform: 'translateX(0)'})),
      ]),
    ]),
  ]
})
export class MlandingComponent {
 

 
  sports = [
    {image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_599,c_limit/ac7b90c4-a2aa-4399-b605-c09ad8efa9fa/men-s-shoes-clothing-accessories.jpg", se: "Tennis"},
    {image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_599,c_limit/0944487c-0883-4714-8677-ffbf72c2de17/men-s-shoes-clothing-accessories.jpg", se: "Basketball"},
    {image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_599,c_limit/612979a2-5c77-42e1-a609-9fef94d55fed/men-s-shoes-clothing-accessories.jpg", se: "Running"},
    {image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_599,c_limit/abe1d59e-a58b-4869-ad19-07ae63faa075/men-s-shoes-clothing-accessories.jpg", se: "Football"},
    {image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_599,c_limit/6506a146-f312-4cd5-9b58-323a2af1daa4/men-s-shoes-clothing-accessories.jpg", se: "Traning"},
    {image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_599,c_limit/64cf4f07-c7bb-46c5-b252-612bb6ce9e05/men-s-shoes-clothing-accessories.jpg", se: "Yoga"},
  
  ]
  middle = [
    {image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_599,c_limit/e7dcd9e3-0ec9-4349-ba59-77db6b6057a8/men-s-shoes-clothing-accessories.png", se: "New Releases"},
    {image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_599,c_limit/1a2a145c-2d98-44b0-80d3-5dd10b845c35/men-s-shoes-clothing-accessories.png", se: "Bestsellers"},
    {image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_599,c_limit/8c79c796-0c7f-492a-8037-82305a591e01/men-s-shoes-clothing-accessories.png", se: "Equipment"},
  ]

  constructor(){
    
  }

 

  sConfig = {
    navigation: true,
    pagination: true,
    spaceBetween: 20,
    breakpoints: {
      1400: {
        slidesPerView: 4
      },
      900: {
        slidesPerView: 3
      },
      760: {
        slidesPerView: 2
      },
      560: {
        slidesPerView: 1
      },
  
    }
  }
  
}
