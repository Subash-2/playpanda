import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

  closeNav(){ 
    $('#navbarCollapse').removeClass('show'); 
    // $('#myDiv').removeClass('show'); 

   
  }
}
