import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {
 
  produto: Produto = new Produto()
  idProduto: number
  
  constructor(
    private  protudoService:ProdutoService,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProduto(this.idProduto)
  }
  findByIdProduto(id: number){
    this.protudoService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto = resp
    })
  }
  apagar(){
  this.protudoService.deleteProduto(this.idProduto).subscribe(()=>{
    alert('Pro~duto apagado com sucesso!')
    this.router.navigate(['/produto'])
  })
  }

}
