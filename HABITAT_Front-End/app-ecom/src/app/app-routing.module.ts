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
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { BuscarCategoriaComponent } from './buscar-categoria/buscar-categoria.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { CarrinhoComponent } from './carrinho/carrinho.component'

const routes: Routes = [
  {path: '', redirectTo:'inicio',pathMatch:'full'},

  {path: 'logar' ,component:LogarComponent },
  {path: 'cadastrar' ,component:CadastrarComponent},
  {path:'inicio', component:InicioComponent},
  {path:'blog',component:BlogComponent},
  {path:'sobre-nos',component:SobreNosComponent},
  {path:'pesquisa',component:PesquisaComponent},
  {path:'carrinho' ,component:CarrinhoComponent},

  {path: 'produto', component: ProdutoComponent},
  {path: 'categoria', component: CategoriaComponent},

  {path: 'produto-edit/:id', component: ProdutoEditComponent},
  {path: 'produto-delete/:id', component: ProdutoDeleteComponent},

  {path: 'categoria-edit/:id', component: CategoriaEditComponent},
  {path: 'categoria-delete/:id', component: CategoriaDeleteComponent},

  {path: 'categoria-buscar/:id', component: BuscarCategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
