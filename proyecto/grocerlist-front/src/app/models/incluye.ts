import { Product } from "./product";

export interface Incluye{
    idLista: number,
    idProducto: number,
    added: boolean,
    cantidad: number,
    producto: Product
}