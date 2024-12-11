import { Component, inject } from '@angular/core';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";
import { Router } from '@angular/router';
import { CineCreacionDTO } from '../cines';

@Component({
  selector: 'app-crear-cine',
  standalone: true,
  imports: [FormularioCinesComponent],
  templateUrl: './crear-cine.component.html',
  styleUrl: './crear-cine.component.css'
})
export class CrearCineComponent {
  private router = inject(Router);

  guardarCambios(cine: CineCreacionDTO){
    console.log("Creando cine:", cine);
  }
}
