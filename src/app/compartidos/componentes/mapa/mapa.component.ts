import { Component, EventEmitter, Input, input, OnInit, Output, output } from '@angular/core';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { latLng, Layer, marker, Marker, tileLayer,LeafletMouseEvent, MarkerOptions, icon } from 'leaflet';
import { Coordenada } from './cordenada'; 
@Component({
  selector: 'app-mapa',
  imports: [LeafletModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements OnInit {
  ngOnInit(): void {
this.capas= this.coordenadasIniciales.map(valor =>{
  const marcador = marker([valor.latitud, valor.longitud],this.markerOptions);
  return marcador;
});  }
  @Input()
  coordenadasIniciales: Coordenada[] = [];
 
  @Output()
  coordenadaSeleccionada = new EventEmitter<Coordenada>();
  markerOptions: MarkerOptions = {
    icon: icon({
      iconSize: [25, 41],
      iconUrl:'assets/marker-icon.png',
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  }
 
  options ={
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution:'...'
      })
 
 
    ],
    zoom:14,
    center: latLng(42.50826320089816, 1.5249827583088202)
  }
  capas: Marker<any>[] =[];
  manejarClick(event: LeafletMouseEvent){
    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;
 
    this.capas = [];
    this.capas.push(marker([latitud, longitud], this.markerOptions));
    this.coordenadaSeleccionada.emit({latitud, longitud})
  }
}
