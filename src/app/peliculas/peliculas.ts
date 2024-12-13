export interface PeliculaDTO{
    id: number;
    titulo: string;
    frchaLanzamiento: Date;
    trailer: string;
    poster?: string;
}

export interface PeliculasCreacionDTO{
    titulo: string;
    fechaLanzamineto: Date;
    trailer: string;
    poster?: File;
}