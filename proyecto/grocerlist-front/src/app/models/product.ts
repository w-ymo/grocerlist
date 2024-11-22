import { Categoria } from "./categoria";

export interface Product{
    idProducto: number,
    nombreProducto: string,
    categoria: Categoria
}