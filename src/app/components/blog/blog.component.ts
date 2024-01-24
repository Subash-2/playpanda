import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit{

  collection: any = [];
  p : number = 1;

  backgroundImageUrl: string = '../../../assets/blog-1.jpg';
  backgroundImageUrl2: string = '../../../assets/blog2.jpg';
  backgroundImageUrl3: string = '../../../assets/blog3.jpg';
  backgroundImageUrl4: string = '../../../assets/blog4.jpg';
  backgroundImageUrl5: string = '../../../assets/blog5.jpg';
  backgroundImageUrl6: string = '../../../assets/blog6.jpg';
  constructor(){}

  ngOnInit(): void {
    for (let i = 1; i <= 100; i++) {
      // this.collection.push(`item ${i}`);
  }
}
  closeNav(){ 
    $('#navbarCollapse').removeClass('show'); 
    // $('#myDiv').removeClass('show'); 

   
  }


  
}
