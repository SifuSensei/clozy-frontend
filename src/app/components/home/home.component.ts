import { Component, OnInit, ElementRef, ViewChild,Inject, inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
declare const anime: any;
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit{


@ViewChild('womensimage', { static: true }) womensimage!: ElementRef<
  HTMLDivElement
>;
@ViewChild('mensimage', { static: true }) mensimage!: ElementRef<
  HTMLDivElement
>;

constructor(@Inject(DOCUMENT) private document: Document){}

  
scrollAni(): void {
   

  gsap.to(this.mensimage.nativeElement, {
    
    scrollTrigger: {
      trigger: this.mensimage.nativeElement,
      start: '50% center',
      onUpdate: self => console.log("direction:", self.direction)
    } ,
    duration: 1.1,
    scale: 1.0,
    height: 500,
   
  });
  gsap.to(this.womensimage.nativeElement, {
    scrollTrigger: {
      trigger: this.womensimage.nativeElement,
      start: '50% center',
    },
    duration: 1.1,
    scale: 1.0,
    height: 500,
  });
  
  
}
firstAni(): void {
  gsap.from(this.mensimage.nativeElement, {
    duration: 0.5,
    opacity: 0,
    y: -20,
    stagger: 0.2,
    delay: 0.6,
  });
  gsap.from(this.womensimage.nativeElement, {
    duration: 0.7,
    opacity: 0,
    y: -20,
    delay: 0.6,
  });
}
  ngAfterViewInit(): void {
    const textWrapper = document.querySelector('.hey');
    textWrapper!.innerHTML = textWrapper!.textContent!.replace(/\S/g, "<span class='animejs'>$&</span>");

    const grid = document.querySelector('.containr')
    for (let i =1; i < 100; i++){
      const dot = document.createElement('div')
      dot.classList.add('element');
      grid?.appendChild(dot)
    }
    const dotAll = document.querySelectorAll('.element')

anime.timeline({loop: true})
  .add({
    targets: '.hey .animejs',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el:any, i:any) => 150 * (i+1)
  }).add({
    targets: '.hey',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 10000
  }).add({
    targets: dotAll,
    easing: 'easeInOutExpo',
    loop: true,
    delay: (el:any, i:any) => 100 * (i+1)
  });
  anime({
    targets: '.shirts .shi',
    direction: 'alternate',
    loop: true,
    scale: {
      value: '1.4',
      delay: function(el:any , i:any, l:any) {
        return i * 800;
      },
      duration: 1100
    }

 });

  }
  ngOnInit() {
    this.scrollAni()
    this.firstAni()
    const interval = setInterval(() => {
      const countForVideo = (<HTMLVideoElement>document.getElementById('vid')).readyState;
      if (countForVideo === 4) {
        (<HTMLVideoElement>document.getElementById('vid')).play();
        clearInterval(interval);
      }
    }, 1000);
    
  }

}
