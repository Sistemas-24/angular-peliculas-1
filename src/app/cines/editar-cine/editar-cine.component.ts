import { Component, Input, numberAttribute } from '@angular/core';
import { CineAgregarDTO, CineDTO } from '../cine';
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

  cine: CineDTO = {
    id: 1, nombre: 'Acropolis',
    latitud: 0,
    longitud: 0
  }

  guardarCambios(cine: CineAgregarDTO){
    console.log('editar cine', cine);
  }
}
