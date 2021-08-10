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
    this.findAllProdutos()
  }

  findAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[])=>{
   this.listaProduto = resp
   console.log("postagens "+ this.listaProduto)
    })
  }

  findByCategoriaProduto(){
    listaProduto
    this.produtoService.getByCategoriaProduto(this.categoriaProduto).subscribe((resp: Produto[])=>
    {
      this.listaPro duto = resp
    })

}

}
