import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  listaProduto: Produto[]
  categoriaProduto: string

  constructor(
    private produtoService: ProdutoService,
  ) { }

  ngOnInit(){
  }

  findAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[])=>{
   this.listaProduto = resp
    })
  }

  findByCategoriaProduto(){
    if(this.categoriaProduto == ''){
      this.produtoService.getAllProduto()
    }else{
    this.produtoService.getByCategoriaProduto(this.categoriaProduto).subscribe((resp: Produto[])=>
    {
      this.listaProduto = resp
    })
  }
}

}
