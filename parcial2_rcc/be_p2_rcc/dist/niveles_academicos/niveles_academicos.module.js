"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NivelesAcademicosModule = void 0;
const common_1 = require("@nestjs/common");
const niveles_academicos_service_1 = require("./niveles_academicos.service");
const niveles_academicos_controller_1 = require("./niveles_academicos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const niveles_academico_entity_1 = require("./entities/niveles_academico.entity");
let NivelesAcademicosModule = class NivelesAcademicosModule {
};
exports.NivelesAcademicosModule = NivelesAcademicosModule;
exports.NivelesAcademicosModule = NivelesAcademicosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([niveles_academico_entity_1.NivelesAcademico])],
        controllers: [niveles_academicos_controller_1.NivelesAcademicosController],
        providers: [niveles_academicos_service_1.NivelesAcademicosService],
    })
], NivelesAcademicosModule);
//# sourceMappingURL=niveles_academicos.module.js.map