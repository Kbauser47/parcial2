import { NivelesAcademico } from 'src/niveles_academicos/entities/niveles_academico.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('programas')
export class Programa {
  /*id: llave primaria auto numérica
    id_nivel_academico: numérico, campo obligatorio, llave foránea de la tabla niveles_academicos
    nombre: cadena de 100 caracteres, campo obligatorio, Ej. Diplomado en Software Libre, Maestría en Desarrollo Web
    descripcion: cadena de 2000 caracteres, campo obligatorio.
    version: numérico entero, campo obligatorio
    duracion_meses: numérico entero, campo obligatorio
    costo: numérico decimal, campo obligatorio
    fecha_inicio: fecha, campo obligatorio
    estado: cadena de 20 caracteres. enum ('En Planificación', 'En curso', 'Finalizado'), campo obligatorio, en frontend debe ser un select. */
  @PrimaryGeneratedColumn('identity')
  id: number;
  @Column('integer', { name: 'id_nivel_academico' })
  idNivelAcademico: number;
  @Column('varchar', { length: 100 })
  nombre: string;
  @Column('varchar', { length: 2000 })
  descripcion: string;
  @Column('integer')
  version: number;
  @Column('integer')
  duracion_meses: number;
  @Column('decimal', { precision: 10, scale: 2 })
  costo: number;
  @Column('date')
  fecha_inicio: Date;
  @Column('enum', { enum: ['En Planificación', 'En curso', 'Finalizado'] })
  estado: 'En Planificación' | 'En curso' | 'Finalizado';
  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;
  @CreateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;
  @CreateDateColumn({ name: 'fecha_eliminacion' })
  fechaEliminacion: Date;

  @ManyToOne(
    () => NivelesAcademico,
    (nivelesAcademico) => nivelesAcademico.programas,
  )
  @JoinColumn({ name: 'id_nivel_academico', referencedColumnName: 'id' })
  nivelesAcademico: NivelesAcademico;
}
