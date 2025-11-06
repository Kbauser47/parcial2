export declare class CreateProgramaDto {
    readonly idNivelAcademico: number;
    readonly nombre: string;
    readonly descripcion: string;
    readonly version: number;
    readonly duracionMeses: number;
    readonly costo: number;
    readonly fechaInicio: Date;
    readonly estado: 'En Planificación' | 'En curso' | 'Finalizado';
}
