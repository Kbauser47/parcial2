import { NivelesAcademicosService } from './niveles_academicos.service';
import { CreateNivelesAcademicoDto } from './dto/create-niveles_academico.dto';
import { UpdateNivelesAcademicoDto } from './dto/update-niveles_academico.dto';
export declare class NivelesAcademicosController {
    private readonly nivelesAcademicosService;
    constructor(nivelesAcademicosService: NivelesAcademicosService);
    create(createNivelesAcademicoDto: CreateNivelesAcademicoDto): Promise<import("./entities/niveles_academico.entity").NivelesAcademico>;
    findAll(): Promise<import("./entities/niveles_academico.entity").NivelesAcademico[]>;
    findOne(id: string): Promise<import("./entities/niveles_academico.entity").NivelesAcademico>;
    update(id: string, updateNivelesAcademicoDto: UpdateNivelesAcademicoDto): Promise<import("./entities/niveles_academico.entity").NivelesAcademico>;
    remove(id: string): Promise<import("./entities/niveles_academico.entity").NivelesAcademico>;
}
