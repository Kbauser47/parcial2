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
exports.CreateProgramaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateProgramaDto {
    idNivelAcademico;
    nombre;
    descripcion;
    version;
    duracionMeses;
    costo;
    fechaInicio;
    estado;
}
exports.CreateProgramaDto = CreateProgramaDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre no debe estar vacio' }),
    (0, class_validator_1.IsNumber)({}, { message: 'El NivelAcademico debe ser un número' }),
    (0, class_validator_1.IsInt)({ message: 'El NivelAcademico debe ser un número entero' }),
    (0, class_transformer_1.Transform)(({ value }) => typeof value === 'number' ? value : Number(value)),
    __metadata("design:type", Number)
], CreateProgramaDto.prototype, "idNivelAcademico", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre no debe estar vacio' }),
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser una cadena de texto' }),
    (0, class_validator_1.MaxLength)(100, { message: 'El nombre no debe exceder los 100 caracteres' }),
    (0, class_transformer_1.Transform)(({ value }) => typeof value === 'string' ? value.trim() : value),
    __metadata("design:type", String)
], CreateProgramaDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'La descripcion no debe estar vacia' }),
    (0, class_validator_1.IsString)({ message: 'La descripcion debe ser una cadena de texto' }),
    (0, class_validator_1.MaxLength)(2000, {
        message: 'La descripcion no debe exceder los 2000 caracteres',
    }),
    (0, class_transformer_1.Transform)(({ value }) => typeof value === 'string' ? value.trim() : value),
    __metadata("design:type", String)
], CreateProgramaDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre no debe estar vacio' }),
    (0, class_validator_1.IsNumber)({}, { message: 'El NivelAcademico debe ser un número' }),
    (0, class_validator_1.IsInt)({ message: 'El NivelAcademico debe ser un número entero' }),
    (0, class_transformer_1.Transform)(({ value }) => typeof value === 'number' ? value : Number(value)),
    __metadata("design:type", Number)
], CreateProgramaDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre no debe estar vacio' }),
    (0, class_validator_1.IsNumber)({}, { message: 'El NivelAcademico debe ser un número' }),
    (0, class_validator_1.IsInt)({ message: 'El NivelAcademico debe ser un número entero' }),
    (0, class_transformer_1.Transform)(({ value }) => typeof value === 'number' ? value : Number(value)),
    __metadata("design:type", Number)
], CreateProgramaDto.prototype, "duracionMeses", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre no debe estar vacio' }),
    (0, class_validator_1.IsNumber)({}, { message: 'El NivelAcademico debe ser un número' }),
    (0, class_transformer_1.Transform)(({ value }) => typeof value === 'number' ? value : Number(value)),
    __metadata("design:type", Number)
], CreateProgramaDto.prototype, "costo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre no debe estar vacio' }),
    (0, class_validator_1.IsDate)({ message: 'La fecha de inicio debe ser una fecha válida' }),
    (0, class_transformer_1.Transform)(({ value }) => typeof value === 'string' ? new Date(value) : value),
    __metadata("design:type", Date)
], CreateProgramaDto.prototype, "fechaInicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El estado no debe estar vacio' }),
    (0, class_validator_1.IsString)({ message: 'El estado debe ser una cadena de texto' }),
    (0, class_validator_1.MaxLength)(20, { message: 'El estado no debe exceder los 20 caracteres' }),
    (0, class_transformer_1.Transform)(({ value }) => typeof value === 'string' ? value.trim() : value),
    __metadata("design:type", String)
], CreateProgramaDto.prototype, "estado", void 0);
//# sourceMappingURL=create-programa.dto.js.map