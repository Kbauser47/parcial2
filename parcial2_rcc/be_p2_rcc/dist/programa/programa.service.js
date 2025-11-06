"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramaService = void 0;
const common_1 = require("@nestjs/common");
const programa_entity_1 = require("./entities/programa.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ProgramaService = class ProgramaService {
    programasRepository;
    constructor(programasRepository) {
        this.programasRepository = programasRepository;
    }
    async create(createProgramaDto) {
        let programa = await this.programasRepository.findOneBy({
            idNivelAcademico: createProgramaDto.idNivelAcademico,
            nombre: createProgramaDto.nombre,
            descripcion: createProgramaDto.descripcion,
        });
        if (programa)
            throw new common_1.ConflictException('El programa ya existe');
        programa = new programa_entity_1.Programa();
        Object.assign(programa, createProgramaDto);
        return this.programasRepository.save(programa);
    }
    async findAll(parametro) {
        return this.programasRepository.find({
            where: { nombre: (0, typeorm_2.ILike)(`%${parametro ?? ''}%`) },
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
    async findOne(id) {
        const programa = await this.programasRepository.findOneBy({
            id,
        });
        if (!programa)
            throw new common_1.NotFoundException('El programa no existe');
        return programa;
    }
    async update(id, updateProgramaDto) {
        const programa = await this.findOne(id);
        Object.assign(programa, updateProgramaDto);
        return this.programasRepository.save(programa);
    }
    async remove(id) {
        const programa = await this.findOne(id);
        return this.programasRepository.softRemove(programa);
    }
};
exports.ProgramaService = ProgramaService;
exports.ProgramaService = ProgramaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(programa_entity_1.Programa)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProgramaService);
//# sourceMappingURL=programa.service.js.map