import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  logar(userLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://projetohabitat.herokuapp.com/usuario/logar',userLogin)


  }

  cadastrar(user: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://projetohabitat.herokuapp.com/usuario/cadastrar',user)

  }

  logado(){
    let ok = false
   if(environment.token != ''){
     ok = true
   }

    return ok 
  }


  vendedor(){
    let ok: boolean = false
   if(environment.tipo == 'VENDEDOR'){
     ok = true
   }

    return ok 
  }
}


