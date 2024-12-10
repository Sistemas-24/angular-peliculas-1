import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import { fechaNoPuedeSerFutura, primeraLetraMayuscula } from '../../compartidos/componentes/funciones/validaciones';
import { MatDatepickerModule } from '@angular/material/datepicker';
import moment from 'moment';
import { InputImgComponent } from "../../compartidos/componentes/input-img/input-img.component";

@Component({
  selector: 'app-formulario-actores',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink, MatDatepickerModule, InputImgComponent],
  templateUrl: './formulario-actores.component.html',
  styleUrl: './formulario-actores.component.css'
})
export class FormularioActoresComponent implements OnInit{
  ngOnInit(): void {
    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  @Input()
  modelo?: ActorDTO;

  @Output()
  posteoFormulario = new EventEmitter<ActorCreacionDTO>();
  
  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    nombre : ["", {validators: [Validators.required, primeraLetraMayuscula()]}],
    fechaNacimiento: new FormControl<Date | null>(null, {
      validators: [Validators.required, fechaNoPuedeSerFutura()]
    }),
    foto: new FormControl<File | string | null>(null),
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

  obtenerErrorCampoFechaNacimiento(): string {
    let fecha = this.form.controls.fechaNacimiento;
    
    if(fecha.hasError("required")){
      return "El campo fecha nacimiento es requerido";
    }

    if(fecha.hasError("futuro")){
      return fecha.getError("futuro").mensaje;
    }

    return "";
  }

  archivoSeleccionado(file: File){
    this.form.controls.foto.setValue(file);
  }

  guardarCambios() {
    if (!this.form.valid) {
      return;
    }
  
    const actor = this.form.value as ActorCreacionDTO;
    actor.fechaNacimiento = moment(actor.fechaNacimiento).toDate();

    if (typeof actor.foto === "string") {
      actor.foto = undefined;
    }

    this.posteoFormulario.emit(actor);
  
  }
}
