import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';
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
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {

    if(environment.tipo == 'COMPRADOR'){
      this.alertas.showAlertInfo('Você precisa ser vendedor para ter acesso a essa rota.')
      this.router.navigate(['/inicio'])
    }
 
  this.findAllProdutos()
  this.getAllCategoria()
}

 findAllProdutos(){
 this.produtoService.getAllProduto().subscribe((resp: Produto[])=>{
this.listaProdutos = resp

})
}

getAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaCategoria = resp
    })
}

findByIdCategoria(){
  this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria)=>{
    this.categoria = resp
  })
  
}

  cadastrar(){
    this.categoria.id = this.idCategoria
    this.produto.tipoMercadoria = this.categoria
    console.log("produto"+JSON.stringify(this.produto))
      this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=>{
    this.produto = resp
    this.alertas.showAlertSuccess('Produto cadastrado com sucesso!')
    this.findAllProdutos()
    this.produto = new Produto()
  })
  }

}