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
exports.NivelesAcademico = void 0;
const programa_entity_1 = require("../../programa/entities/programa.entity");
const typeorm_1 = require("typeorm");
let NivelesAcademico = class NivelesAcademico {
    id;
    nombre;
    descripcion;
    fechaCreacion;
    fechaModificacion;
    fechaEliminacion;
    programas;
};
exports.NivelesAcademico = NivelesAcademico;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity'),
    __metadata("design:type", Number)
], NivelesAcademico.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 20 }),
    __metadata("design:type", String)
], NivelesAcademico.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 500 }),
    __metadata("design:type", String)
], NivelesAcademico.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion' }),
    __metadata("design:type", Date)
], NivelesAcademico.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'fecha_modificacion' }),
    __metadata("design:type", Date)
], NivelesAcademico.prototype, "fechaModificacion", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'fecha_eliminacion' }),
    __metadata("design:type", Date)
], NivelesAcademico.prototype, "fechaEliminacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => programa_entity_1.Programa, (programa) => programa.nivelesAcademico),
    __metadata("design:type", Array)
], NivelesAcademico.prototype, "programas", void 0);
exports.NivelesAcademico = NivelesAcademico = __decorate([
    (0, typeorm_1.Entity)('niveles_academicos')
], NivelesAcademico);
//# sourceMappingURL=niveles_academico.entity.js.map