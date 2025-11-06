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
exports.NivelesAcademicosController = void 0;
const common_1 = require("@nestjs/common");
const niveles_academicos_service_1 = require("./niveles_academicos.service");
const create_niveles_academico_dto_1 = require("./dto/create-niveles_academico.dto");
const update_niveles_academico_dto_1 = require("./dto/update-niveles_academico.dto");
let NivelesAcademicosController = class NivelesAcademicosController {
    nivelesAcademicosService;
    constructor(nivelesAcademicosService) {
        this.nivelesAcademicosService = nivelesAcademicosService;
    }
    create(createNivelesAcademicoDto) {
        return this.nivelesAcademicosService.create(createNivelesAcademicoDto);
    }
    findAll() {
        return this.nivelesAcademicosService.findAll();
    }
    findOne(id) {
        return this.nivelesAcademicosService.findOne(+id);
    }
    update(id, updateNivelesAcademicoDto) {
        return this.nivelesAcademicosService.update(+id, updateNivelesAcademicoDto);
    }
    remove(id) {
        return this.nivelesAcademicosService.remove(+id);
    }
};
exports.NivelesAcademicosController = NivelesAcademicosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_niveles_academico_dto_1.CreateNivelesAcademicoDto]),
    __metadata("design:returntype", void 0)
], NivelesAcademicosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NivelesAcademicosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NivelesAcademicosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_niveles_academico_dto_1.UpdateNivelesAcademicoDto]),
    __metadata("design:returntype", void 0)
], NivelesAcademicosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NivelesAcademicosController.prototype, "remove", null);
exports.NivelesAcademicosController = NivelesAcademicosController = __decorate([
    (0, common_1.Controller)('nivelesacademicos'),
    __metadata("design:paramtypes", [niveles_academicos_service_1.NivelesAcademicosService])
], NivelesAcademicosController);
//# sourceMappingURL=niveles_academicos.controller.js.map