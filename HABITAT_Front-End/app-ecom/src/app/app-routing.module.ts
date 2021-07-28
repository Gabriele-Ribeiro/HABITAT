import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { BlogComponent } from './blog/blog.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';



const routes: Routes = [
  {path: '', redirectTo:'inicio',pathMatch:'full'},

  {path:'inicio', component:InicioComponent},
  {path:'blog',component:BlogComponent},
  {path:'sobre-nos',component:SobreNosComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
