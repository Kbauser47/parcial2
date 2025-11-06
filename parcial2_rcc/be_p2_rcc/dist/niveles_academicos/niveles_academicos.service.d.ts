import { CreateNivelesAcademicoDto } from './dto/create-niveles_academico.dto';
import { UpdateNivelesAcademicoDto } from './dto/update-niveles_academico.dto';
import { NivelesAcademico } from './entities/niveles_academico.entity';
import { Repository } from 'typeorm';
export declare class NivelesAcademicosService {
    private nivelesAcademicosRepository;
    constructor(nivelesAcademicosRepository: Repository<NivelesAcademico>);
    create(createNivelesAcademicoDto: CreateNivelesAcademicoDto): Promise<NivelesAcademico>;
    findAll(): Promise<NivelesAcademico[]>;
    findOne(id: number): Promise<NivelesAcademico>;
    update(id: number, updateNivelesAcademicoDto: UpdateNivelesAcademicoDto): Promise<NivelesAcademico>;
    remove(id: number): Promise<NivelesAcademico>;
}
