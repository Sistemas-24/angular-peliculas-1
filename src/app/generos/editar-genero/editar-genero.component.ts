import { Component, Input, numberAttribute } from '@angular/core';
import { GeneroCreacionDTO, GeneroDTO } from '../generos';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";

@Component({
  selector: 'app-editar-genero',
  standalone: true,
  imports: [FormularioGeneroComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent {
  @Input({transform: numberAttribute})
  id!: number;

  genero: GeneroDTO = {id: 1, nombre: "Accion"}

  guardarCambios(genero: GeneroCreacionDTO){
    console.log("Editando el genero:", genero);
  }
}
