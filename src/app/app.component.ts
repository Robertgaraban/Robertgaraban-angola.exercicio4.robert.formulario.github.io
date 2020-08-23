import { Component } from '@angular/core';

//import { UsuarioService } from './usuario.service';

import { EnderecoService } from './endereco.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'formulario';

   endereco: any = {};

   tem_endereco: boolean = false;

  constructor(private endServ: EnderecoService) {

    this.tem_endereco = false;

  }
  
  onSubmit(formulario){
    
    if (formulario.form.status == 'INVALID'){
      
    alert("Formulario Invalido! os dados estão incorretos!");
    
    return;
    
    }

    this.endServ.getEndereco(formulario.form.value.zipcode).subscribe(endereco => {
      
      this.endereco = endereco;
      
      this.tem_endereco = true;

      console.log(this.endereco);
  
    });
  

    
  } 
  
  limpar(){

    this.endereco = { };
    this.tem_endereco = false;
    
  }
 
  
}
  
  
  
  
  
  //usuario: any = {};

  /*constructor(private usuService : UsuarioService) {

    // usuService.getUsuario().subscribe(usuario => this.usuario = usuario);

  }

  onSubmit(formulario){
    
    if (formulario.form.status == 'INVALID')
    alert("Formulario Invalido! os dados estão incorretos!");
   
     else (formulario.form.status == 'VALID')
    alert("Dados enviados com sucesso!");
    
    console.log(formulario.form.value);

     console.log(formulario.form); 

    if (formulario.form.status == 'INVALID')
      alert("Formulario Invalido! os dados estão incorretos!");
   
      this.usuService.postUsuario(formulario.form.value)
      .subscribe(resposta => {
        console.log(resposta);
        alert("Dados enviados com sucesso!");
      });
 



  }
*/
