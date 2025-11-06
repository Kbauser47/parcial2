import { NivelesAcademico } from 'src/niveles_academicos/entities/niveles_academico.entity';
export declare class Programa {
    id: number;
    idNivelAcademico: number;
    nombre: string;
    descripcion: string;
    version: number;
    duracion_meses: number;
    costo: number;
    fecha_inicio: Date;
    estado: 'En Planificación' | 'En curso' | 'Finalizado';
    fechaCreacion: Date;
    fechaModificacion: Date;
    fechaEliminacion: Date;
    nivelesAcademico: NivelesAcademico;
}
