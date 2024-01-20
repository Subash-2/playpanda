import { Component, OnInit } from '@angular/core';
// import { OwlOptions } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private router : Router){}


  activeTab: any;

  ngOnInit(): void {
    
  }


  

  onSelectTab(newTab: string): void {
    this.activeTab = newTab;
    this.router.navigate([newTab]);

    console.log('tab',this.activeTab)
  }

  closeNav(){ 
    $('#navbarCollapse').removeClass('show'); 
    // $('#myDiv').removeClass('show'); 

   
  }
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000, // Adjust this value to control the time between slides
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    items : 10,
    navSpeed: 1000,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
    nav: false
  }
  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }
}
