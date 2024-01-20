import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit{

  collection: any = [];
  p : number = 1;

  backgroundImageUrl: string = '../../../assets/img/blog-1.jpg';
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
