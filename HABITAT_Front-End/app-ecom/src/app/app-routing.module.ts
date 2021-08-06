import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { BlogComponent } from './blog/blog.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { LogarComponent } from './logar/logar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ProdutoComponent } from './produto/produto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';

const routes: Routes = [
  {path: '', redirectTo:'logar',pathMatch:'full'},

  {path: 'logar' ,component:LogarComponent },
  {path: 'cadastrar' ,component:CadastrarComponent},
  {path:'inicio', component:InicioComponent},
  {path:'blog',component:BlogComponent},
  {path:'sobre-nos',component:SobreNosComponent},

  {path: 'produto', component: ProdutoComponent},
  {path: 'categoria', component: CategoriaComponent}, 

  {path: 'produto-edit/:id', component: ProdutoEditComponent},
  {path: 'produto-delete/:id', component: ProdutoDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
