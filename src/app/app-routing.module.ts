import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path : '',redirectTo : 'index/home',pathMatch : 'full'},
 
  {
    path: 'index',
    loadChildren: () =>
      import('./components/components.module').then((admin) => admin.ComponentsModule),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
