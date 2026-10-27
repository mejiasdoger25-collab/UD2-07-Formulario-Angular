import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-register-form-component',
  styleUrl: './register-form-component.css',
  templateUrl: './register-form-component.html',
})
export class RegisterFormComponent {

  //lista de variables para cada elemento del form
  emailForm = 'miguel@email.com';

  nombre = ''
  apellidos = ''
  nif = ''
  email = ''
  telefono = ''
  sexo = ''
  comoNosConociste = ''
  contrasena = ''
  confirmPassword = ''


  sendForm() {
    console.log(this.nombre);
    console.log(this.apellidos);
    console.log(this.nif);
    console.log(this.email);
    console.log(this.telefono);
    console.log(this.sexo);
    console.log(this.comoNosConociste); 
    console.log(this.contrasena);
    console.log(this.confirmPassword);
  }
}
