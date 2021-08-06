import { Produto } from "./Produto"

export class Categoria {

    public id: number
    public tipoProduto: string
    public marcas: string
    public produtosCriados: Produto[]
}