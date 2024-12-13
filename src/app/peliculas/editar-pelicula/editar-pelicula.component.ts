import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculaDTO, PeliculasCreacionDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';

@Component({
  selector: 'app-editar-pelicula',
  standalone: true,
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {
  @Input({transform: numberAttribute})
  id!: number;

  pelicula: PeliculaDTO = {id: 1, titulo: 'Deadpool & Wolverine', trailer: 'ABC', frchaLanzamiento: new Date('2018-07-25'),poster:'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg'}

    generosSeleccionados: SelectorMultipleDTO[] = [
      {llave: 2, valor: 'Accion'}
    ];
  
    generosNoSeleccionados: SelectorMultipleDTO[] = [
      {llave: 1, valor: 'Drama'},
      {llave: 3, valor: 'Comedia'}
    ];

  guardarCambios(pelicula: PeliculasCreacionDTO){
    console.log('editando pelicula', pelicula);
  }
}
