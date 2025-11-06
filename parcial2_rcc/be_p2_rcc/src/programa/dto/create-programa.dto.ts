import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

/*id: llave primaria auto numérica
id_nivel_academico: numérico, campo obligatorio, llave foránea de la tabla niveles_academicos
nombre: cadena de 100 caracteres, campo obligatorio, Ej. Diplomado en Software Libre, Maestría en Desarrollo Web
descripcion: cadena de 2000 caracteres, campo obligatorio.
version: numérico entero, campo obligatorio
duracion_meses: numérico entero, campo obligatorio
costo: numérico decimal, campo obligatorio
fecha_inicio: fecha, campo obligatorio
estado: cadena de 20 caracteres. enum ('En Planificación', 'En curso', 'Finalizado'), campo obligatorio, en frontend debe ser un select.*/
export class CreateProgramaDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El nombre no debe estar vacio' })
  @IsNumber({}, { message: 'El NivelAcademico debe ser un número' })
  @IsInt({ message: 'El NivelAcademico debe ser un número entero' })
  @Transform(({ value }): number | undefined =>
    typeof value === 'number' ? value : Number(value),
  )
  readonly idNivelAcademico: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El nombre no debe estar vacio' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @MaxLength(100, { message: 'El nombre no debe exceder los 100 caracteres' })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  readonly nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'La descripcion no debe estar vacia' })
  @IsString({ message: 'La descripcion debe ser una cadena de texto' })
  @MaxLength(2000, {
    message: 'La descripcion no debe exceder los 2000 caracteres',
  })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  readonly descripcion: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El nombre no debe estar vacio' })
  @IsNumber({}, { message: 'El NivelAcademico debe ser un número' })
  @IsInt({ message: 'El NivelAcademico debe ser un número entero' })
  @Transform(({ value }): number | undefined =>
    typeof value === 'number' ? value : Number(value),
  )
  readonly version: number;
  // duracion_meses: numérico entero, campo obligatorio
  @ApiProperty()
  @IsNotEmpty({ message: 'El nombre no debe estar vacio' })
  @IsNumber({}, { message: 'El NivelAcademico debe ser un número' })
  @IsInt({ message: 'El NivelAcademico debe ser un número entero' })
  @Transform(({ value }): number | undefined =>
    typeof value === 'number' ? value : Number(value),
  )
  readonly duracionMeses: number;
  // costo: numérico decimal, campo obligatorio
  @ApiProperty()
  @IsNotEmpty({ message: 'El nombre no debe estar vacio' })
  @IsNumber({}, { message: 'El NivelAcademico debe ser un número' })
  @Transform(({ value }): number | undefined =>
    typeof value === 'number' ? value : Number(value),
  )
  readonly costo: number;
  // fecha_inicio: fecha, campo obligatorio
  @ApiProperty()
  @IsNotEmpty({ message: 'El nombre no debe estar vacio' })
  @IsDate({ message: 'La fecha de inicio debe ser una fecha válida' })
  @Transform(({ value }): Date | undefined =>
    typeof value === 'string' ? new Date(value) : value,
  )
  readonly fechaInicio: Date;
  // estado: cadena de 20 caracteres. enum ('En Planificación', 'En curso', 'Finalizado'), campo obligatorio, en frontend debe ser un select.
  @ApiProperty()
  @IsNotEmpty({ message: 'El estado no debe estar vacio' })
  @IsString({ message: 'El estado debe ser una cadena de texto' })
  @MaxLength(20, { message: 'El estado no debe exceder los 20 caracteres' })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  readonly estado: 'En Planificación' | 'En curso' | 'Finalizado';
}
