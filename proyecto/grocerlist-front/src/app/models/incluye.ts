import { Product } from "./product";
import { TpAlmacenaje } from "./tpAlmacenaje";

export interface Incluye{
    idLista: number,
    idProducto: number,
    added: boolean,
    cantidad: number,
    tpAlmacenaje: TpAlmacenaje,
    producto: Product,
    editMode: boolean
}

export interface IncluyeProduct{
    idLista: number,
    idProducto: number,
    added: boolean,
    cantidad: number,
    tpAlmacenaje: number
}