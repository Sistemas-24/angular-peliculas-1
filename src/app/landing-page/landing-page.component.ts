import { Component, OnInit } from '@angular/core';
import { RatingComponent } from "../compartidos/componentes/rating/rating.component";
import { ListadoPeliculasComponent } from "../peliculas/listado-peliculas/listado-peliculas.component";

@Component({
  selector: 'app-landing-page',
  imports: [RatingComponent, ListadoPeliculasComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCine = [
        {
          titulo: "Inside Out 2",
          fechaLanzamiento: new Date(),
          precio: 1400.99,
          poster: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Inside_Out_2_poster.jpg/220px-Inside_Out_2_poster.jpg",
        },
        {
          titulo: "Moana",
          fechaLanzamiento: new Date("2016-05-03"),
          precio: 300.99,
          poster: "https://upload.wikimedia.org/wikipedia/en/2/26/Moana_Teaser_Poster.jpg",
        },
        {
          titulo: "Bad Boys: Ride or Die",
          fechaLanzamiento: new Date("2016-05-03"),
          precio: 300.99,
          poster: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg/220px-Bad_Boys_Ride_or_Die_%282024%29_poster.jpg",
        },];

      this.peliculasProximas = [
        {
          titulo: "Deadpool & Wolverine",
          fechaLanzamiento: new Date("2016-05-03"),
          precio: 300.99,
          poster: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg",
        },
        {
          titulo: "Oppenheimer",
          fechaLanzamiento: new Date("2016-05-03"),
          precio: 300.99,
          poster: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg",
        },
        {
          titulo: "The Flash",
          fechaLanzamiento: new Date("2016-05-03"),
          precio: 300.99,
          poster: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg",
        },];

    }, 100);
  }

  peliculasEnCine!: any[]; 
  peliculasProximas!: any[];
}
