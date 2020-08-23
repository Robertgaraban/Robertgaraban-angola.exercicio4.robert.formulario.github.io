import { Component } from '@angular/core';

import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'formulario';

  usuario: any = {};

  constructor(private usuServicio: UsuarioService) {

    usuServicio.getUsuario().subscribe(usuario => this.usuario = this.usuario)

  }

  onSubmit(formulario){
    console.log(formulario.form.value);
  }

}
