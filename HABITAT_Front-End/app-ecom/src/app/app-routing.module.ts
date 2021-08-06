import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { BlogComponent } from './blog/blog.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { LogarComponent } from './logar/logar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ProdutoComponent } from './produto/produto.component';
import { CategoriaComponent } from './categoria/categoria.component';

const routes: Routes = [
  {path: '', redirectTo:'logar',pathMatch:'full'},

  {path: 'logar' ,component:LogarComponent },
  {path: 'cadastrar' ,component:CadastrarComponent},
  {path:'inicio', component:InicioComponent},
  {path:'blog',component:BlogComponent},
  {path:'sobre-nos',component:SobreNosComponent},

  {path: 'produto', component: ProdutoComponent},
  {path: 'categoria', component: CategoriaComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
