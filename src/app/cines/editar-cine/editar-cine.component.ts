import { Component, Input, numberAttribute } from '@angular/core';
import { CineCreacionDTO, CineDTO } from '../cines';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";

@Component({
  selector: 'app-editar-cine',
  imports: [FormularioCinesComponent],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent {
  @Input({transform: numberAttribute})
  id!: number;

  cine: CineDTO = {id: 1, nombre: "Avance", latitud: 28.788323407308145, longitud: -106.08242704112885};

  guardarCambios(cine: CineCreacionDTO){
    console.log("Editando el cine:", cine);
  }
}
