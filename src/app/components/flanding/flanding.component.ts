import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild, ViewEncapsulation  } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-flanding',
  templateUrl: './flanding.component.html',
  styleUrls: ['./flanding.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FlandingComponent {

img = ["https://res.cloudinary.com/dy2oqmozm/image/upload/v1685747538/yoga_hzduvb.jpg", 
       "https://res.cloudinary.com/dy2oqmozm/image/upload/v1685747551/osaka_ylvsp7.jpg", 
       "https://res.cloudinary.com/dy2oqmozm/image/upload/v1685747556/vonn_qsac4v.jpg"]

seas = [
  {image: "https://res.cloudinary.com/dy2oqmozm/image/upload/v1685503756/sprin_hodfch.jpg", se: "Spring"},

  {image: "https://res.cloudinary.com/dy2oqmozm/image/upload/v1685503843/sum_gdoqt1.jpg", se: "Summer"},
  
  {image: "https://res.cloudinary.com/dy2oqmozm/image/upload/v1685503877/aut_agnd0d.jpg", se: "Autumn"},
  
  
  {image: "https://res.cloudinary.com/dy2oqmozm/image/upload/v1685503808/win_lifcs1.jpg", se: "Winter"}

]
sports = [ 
  {image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/9bf53d36-4b10-4ab7-9d33-adb39eebd50c/women-s-shoes-clothing-accessories.jpg", se: "Dance"},
  {image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/b43c0fe4-f158-4272-8038-9c6609895629/women-s-shoes-clothing-accessories.jpg", se: "Tennis"},
  {image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/91754516-58b0-4471-a766-170a29a87648/women-s-shoes-clothing-accessories.jpg", se: "Basketball"},
  {image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/3ed95c19-845a-4b2f-b78e-33c10b529a26/women-s-shoes-clothing-accessories.jpg", se: "Running"},
  {image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/bbbf11fe-d998-4b86-a3d6-88f1c690f7dc/women-s-shoes-clothing-accessories.jpg", se: "Football"},
  {image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/0ba8a137-07e5-4ffc-9b0d-e7142e6af0fe/women-s-shoes-clothing-accessories.jpg", se: "Traning"},
  {image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/ac33cc1a-b202-4ee6-acfb-ad26f6b460df/women-s-shoes-clothing-accessories.jpg", se: "Yoga"},

]
  constructor(){}

swiperConfig = {
  navigation: true,
  pagination: true,
  spaceBetween: 0,
  breakpoints: {
    1400: {
      slidesPerView: 3
    },
    900: {
      slidesPerView: 2
    },
    760: {
      slidesPerView: 1
    },

  }
}
sConfig = {
  navigation: true,
  pagination: true,
  spaceBetween: 0,
  breakpoints: {
    1400: {
      slidesPerView: 5
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
