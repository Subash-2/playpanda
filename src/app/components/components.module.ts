import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component'; 
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
// import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { HeadComponent } from './head/head.component';

export const routes: Routes = [
 
  { path: '',component:ComponentsComponent, 
children:[
  {path :'home',component:HomeComponent},
  {path :'blog-grid',component:BlogComponent},
  {path :'contact',component:ContactComponent},
  {path:'faq',component:FaqComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path :'blog-details',component:BlogDetailsComponent}
]
},
]



@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    BlogComponent,
    ContactComponent,
    FaqComponent,
    BlogDetailsComponent,
    HeadComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxPaginationModule,
    CarouselModule,
  ]
})
export class ComponentsModule { }
