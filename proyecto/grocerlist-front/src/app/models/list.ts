import { User } from "./user";

export interface List{
    idLista: number,
    nombreLista: string,
    usuarioCreador?: User
}