import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getByIdCategoria(id: Number): Observable<Categoria> {
    return this.http.get<Categoria>(`https://projetohabitat.herokuapp.com/categoria/id/${id}`)
  }

  getAllCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('https://projetohabitat.herokuapp.com/categoria/todos')
  }

  postCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>('https://projetohabitat.herokuapp.com/categoria', categoria, this.token)
  }

  putCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>('https://projetohabitat.herokuapp.com/categoria/', categoria, this.token)
  }

  deleteCategoria(id: Number) {
    return this.http.delete(`https://projetohabitat.herokuapp.com/categoria/id/${id}`, this.token)
  }
}