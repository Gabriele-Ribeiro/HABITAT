import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
   idCategoria:number
   categoria:Categoria = new Categoria 
   listaCategoria: Categoria[]
   produto: Produto = new Produto()
   listaProdutos: Produto[]

  constructor(
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {

 
  this.findAllProdutos()
}

 findAllProdutos(){
 this.produtoService.getAllProduto().subscribe((resp: Produto[])=>{
this.listaProdutos = resp

})
}

  cadastrar(){
    this.categoria.id = this.idCategoria
    this.produto.tipoMercadoria = this.categoria;
    console.log("produto"+JSON.stringify(this.produto))
      this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=>{
    this.produto = resp
    alert('Produto cadastrado com sucesso!')
    this.findAllProdutos()
    this.produto = new Produto()
  })
  }

}