import { Component, Input, numberAttribute } from '@angular/core';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";

@Component({
  selector: 'app-editar-actor',
  standalone: true,
  imports: [FormularioActoresComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent {
  @Input({transform: numberAttribute})
  id!: number;

  actor: ActorDTO = {id: 1, nombre: "Saramalacara", fechaNacimiento: new Date("2000-11-09"), foto: "https://i.scdn.co/image/ab6761610000e5eb7a42af70ca99f4ef4b54223c"};

  guardarCambios(actor: ActorCreacionDTO){
    console.log("Editando el actor:", actor);
  }
}
