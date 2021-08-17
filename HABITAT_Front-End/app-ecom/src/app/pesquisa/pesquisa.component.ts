import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  listaProdutos: Produto[]
  categoriaProduto: string

  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit(){
    this.findAllProdutos()
  }

  findAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[])=>{
   this.listaProdutos = resp  
   })
   }

  findByCategoriaProduto(){
    this.produtoService.getByCategoriaProduto(this.categoriaProduto).subscribe((resp: Produto[])=>
    {
      this.listaProdutos = resp
    })
}
}
