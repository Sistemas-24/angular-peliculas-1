export interface ActorCreacionDTO {
    nombre: string;
    fechaNacimiento: Date;
    foto?: File;
}

export interface ActorDTO {
    id: number;
    nombre: string;
    fechaNacimiento: Date;
    foto?: string;
}