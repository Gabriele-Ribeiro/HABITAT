import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]

  constructor(
    private router: Router,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      alert('Sua seção inspirou. Faça o Login novamente!')
      this.router.navigate(['/logar'])
    }

    this.findAllCategoria()
  }

  findAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaCategoria = resp
    })
  }

cadastrar(){
   this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria)=>{
     this.categoria = resp
     alert('Categoria cadastrada com sucesso!')
     this.findAllCategoria()
     this.categoria = new Categoria()
   })
}


}

