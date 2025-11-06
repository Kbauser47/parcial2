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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Programa = void 0;
const niveles_academico_entity_1 = require("../../niveles_academicos/entities/niveles_academico.entity");
const typeorm_1 = require("typeorm");
let Programa = class Programa {
    id;
    idNivelAcademico;
    nombre;
    descripcion;
    version;
    duracion_meses;
    costo;
    fecha_inicio;
    estado;
    fechaCreacion;
    fechaModificacion;
    fechaEliminacion;
    nivelesAcademico;
};
exports.Programa = Programa;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity'),
    __metadata("design:type", Number)
], Programa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'id_nivel_academico' }),
    __metadata("design:type", Number)
], Programa.prototype, "idNivelAcademico", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100 }),
    __metadata("design:type", String)
], Programa.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 2000 }),
    __metadata("design:type", String)
], Programa.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)('integer'),
    __metadata("design:type", Number)
], Programa.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)('integer'),
    __metadata("design:type", Number)
], Programa.prototype, "duracion_meses", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Programa.prototype, "costo", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], Programa.prototype, "fecha_inicio", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', { enum: ['En Planificación', 'En curso', 'Finalizado'] }),
    __metadata("design:type", String)
], Programa.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion' }),
    __metadata("design:type", Date)
], Programa.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_modificacion' }),
    __metadata("design:type", Date)
], Programa.prototype, "fechaModificacion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_eliminacion' }),
    __metadata("design:type", Date)
], Programa.prototype, "fechaEliminacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => niveles_academico_entity_1.NivelesAcademico, (nivelesAcademico) => nivelesAcademico.programas),
    (0, typeorm_1.JoinColumn)({ name: 'id_nivel_academico', referencedColumnName: 'id' }),
    __metadata("design:type", niveles_academico_entity_1.NivelesAcademico)
], Programa.prototype, "nivelesAcademico", void 0);
exports.Programa = Programa = __decorate([
    (0, typeorm_1.Entity)('programas')
], Programa);
//# sourceMappingURL=programa.entity.js.map