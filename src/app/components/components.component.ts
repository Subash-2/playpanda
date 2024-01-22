import { Component, HostListener, OnInit } from '@angular/core';
import * as $ from 'jquery'


@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit{
  showScroll: boolean = false;
  showScrollHeight = 200;
  hideScrollHeight = 200;
  isNavMenuOpen = false;
  isNavOpen = false;

  ngOnInit(): void {
    
//       // Back to top button
//       $(window).scroll(function () {
//           if ($(this).scrollTop() > 100) {
//               $('.back-to-top').fadeIn('slow');
//           } else {
//               $('.back-to-top').fadeOut('slow');
//           }
//       });
//       $('.back-to-top').click(function () {
//           $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
//           return false;
//       });


  }
  closeNav(){ 
    $('#navbarCollapse').removeClass('show'); 
    // $('#myDiv').removeClass('show'); 

   
  }

  openNave(){
    // $('#navMenu').addClass('show')
    this.isNavMenuOpen = !this.isNavMenuOpen;
    this.isNavOpen = !this.isNavOpen;
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      ) > this.showScrollHeight
    ) {
      this.showScroll = true;
    } else if (this.showScroll &&
      (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) < this.hideScrollHeight
    ) {
      this.showScroll = false;
    }
  }

  scrollToTop() {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    })();
  }

}
