import { Programa } from 'src/programa/entities/programa.entity';
export declare class NivelesAcademico {
    id: number;
    nombre: string;
    descripcion: string;
    fechaCreacion: Date;
    fechaModificacion: Date;
    fechaEliminacion: Date;
    programas: Programa[];
}
