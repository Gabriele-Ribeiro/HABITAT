import { Categoria } from "./Categoria"
import { Usuario } from "./Usuario"

export class Produto {

    public id: number
    public nomeProduto: string
    public foto: string
    public descricao: string
    public preco: string
    public tipoPagamento: string
    public tipoMercadoria: Categoria
    public criador: Usuario
}