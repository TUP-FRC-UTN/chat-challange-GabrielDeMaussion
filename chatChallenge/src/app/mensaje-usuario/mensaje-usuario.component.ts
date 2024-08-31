import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Mensaje } from '../model/mensaje';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje-usuario.component.html',
  styleUrl: './mensaje-usuario.component.css'
})
export class MensajeUsuarioComponent {
  @Input() usuario: Usuario = new Usuario();
  @Output() mensajeSalida = new EventEmitter<Mensaje>();

  mensaje = "";

  onGuardarMensaje(){

    this.mensajeSalida.emit({ 
      usuario : this.usuario,
      mensaje : this.mensaje,
      fecha : new Date()
     });

     this.mensaje = "";

  }
}
