import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../model/mensaje';
import { Usuario } from '../model/usuario';
import { CommonModule } from '@angular/common';
import { MensajeUsuarioComponent } from "../mensaje-usuario/mensaje-usuario.component";

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [CommonModule, MensajeUsuarioComponent],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent implements OnInit{
  ngOnInit(): void {
    this.usuarios = [
      { nombre : "Juan" },
      { nombre : "Maria" }
    ]

      this.mensajes = [

      ];
  }

  mensajes: Mensaje[] = [];
  usuarios: Usuario[] = [];

  onNuevoMensaje(nuevoMensaje : Mensaje){
    this.mensajes.push(nuevoMensaje);
  }


}
