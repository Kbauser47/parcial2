"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const niveles_academicos_module_1 = require("./niveles_academicos/niveles_academicos.module");
const programa_module_1 = require("./programa/programa.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.BD_HOST,
                port: Number(process.env.BD_PORT),
                username: process.env.BD_USERNAME,
                password: process.env.BD_PASSWORD,
                database: process.env.BD_DATABASE,
                entities: [__dirname + '//entities/.{ts|js}'],
                synchronize: true,
                autoLoadEntities: true,
            }),
            niveles_academicos_module_1.NivelesAcademicosModule,
            programa_module_1.ProgramaModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map