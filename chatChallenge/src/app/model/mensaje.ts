import { Usuario } from "./usuario";

export class Mensaje{
    usuario: Usuario = new Usuario();
    mensaje?: string;
    fecha?: Date;
}