import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import { Programa } from './entities/programa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class ProgramaService {
  constructor(
    @InjectRepository(Programa)
    private programasRepository: Repository<Programa>,
  ) {}

  async create(createProgramaDto: CreateProgramaDto): Promise<Programa> {
    let programa = await this.programasRepository.findOneBy({
      idNivelAcademico: createProgramaDto.idNivelAcademico,
      nombre: createProgramaDto.nombre,
      descripcion: createProgramaDto.descripcion,
    });
    if (programa) throw new ConflictException('El programa ya existe');

    programa = new Programa();
    Object.assign(programa, createProgramaDto);
    return this.programasRepository.save(programa);
  }

  async findAll(parametro?: string): Promise<Programa[]> {
    return this.programasRepository.find({
      where: { nombre: ILike(`%${parametro ?? ''}%`) },
      relations: { nivelesAcademico: true },
      select: {
        id: true,
        nombre: true,
        descripcion: true,
        nivelesAcademico: { id: true, nombre: true },
      },
      order: { nombre: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Programa> {
    const programa = await this.programasRepository.findOneBy({
      id,
    });
    if (!programa) throw new NotFoundException('El programa no existe');
    return programa;
  }

  async update(
    id: number,
    updateProgramaDto: UpdateProgramaDto,
  ): Promise<Programa> {
    const programa = await this.findOne(id);
    Object.assign(programa, updateProgramaDto);
    return this.programasRepository.save(programa);
  }

  async remove(id: number): Promise<Programa> {
    const programa = await this.findOne(id);
    return this.programasRepository.softRemove(programa);
  }
  // async findByNivelAcademico(idNivelAcademico: number): Promise<Programa[]> {
  //   return this.programasRepository.find({
  //     where: { id_nivel_academico: idNivelAcademico },
  //     order: { descripcion: 'ASC' },
  //   });
  // }
}
