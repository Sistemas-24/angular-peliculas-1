import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";
import { ActorCreacionDTO } from '../actores';

@Component({
  selector: 'app-crear-actor',
  standalone: true,
  imports: [FormularioActoresComponent],
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css'
})
export class CrearActorComponent {
  private router = inject(Router);

  guardarCambios(actor: ActorCreacionDTO){
    console.log("Creando actor:", actor);
  }
}
