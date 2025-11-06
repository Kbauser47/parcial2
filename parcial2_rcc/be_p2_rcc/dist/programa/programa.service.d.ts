import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import { Programa } from './entities/programa.entity';
import { Repository } from 'typeorm';
export declare class ProgramaService {
    private programasRepository;
    constructor(programasRepository: Repository<Programa>);
    create(createProgramaDto: CreateProgramaDto): Promise<Programa>;
    findAll(parametro?: string): Promise<Programa[]>;
    findOne(id: number): Promise<Programa>;
    update(id: number, updateProgramaDto: UpdateProgramaDto): Promise<Programa>;
    remove(id: number): Promise<Programa>;
}
