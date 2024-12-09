import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { primeraLetraMayuscula } from '../../compartidos/componentes/funciones/validaciones';

@Component({
  selector: 'app-crear-generos',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})

export class CrearGenerosComponent {
  private router = inject(Router);
  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    nombre : ["", {validators: [Validators.required, primeraLetraMayuscula()]}]
  });


  obtenerErrorCampoNombre(): string {
    let nombre = this.form.controls.nombre;

    if(nombre.hasError("required")){
      return "El campo nombre es requerido";
    }

    if (nombre.hasError("primeraLetraMayuscula")) {
      return nombre.getError("primeraLetraMayuscula").mensaje;
    }

    return "";
  }


  guardarCambios(){
    // Guardar cambios
    // this.router.navigate(["/generos"]);
    console.log(this.form.value);
  }
}
