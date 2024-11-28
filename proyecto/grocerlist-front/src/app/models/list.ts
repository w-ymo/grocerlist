import { User } from "./user";

export interface List{
    idLista: number,
    nombreLista: string,
    usuarioCreador?: User
}

export interface ShareList{
    idLista: number,
    username: string
}