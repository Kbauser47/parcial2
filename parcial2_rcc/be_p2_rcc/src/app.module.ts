import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NivelesAcademicosModule } from './niveles_academicos/niveles_academicos.module';
import { ProgramaModule } from './programa/programa.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
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
    NivelesAcademicosModule,
    ProgramaModule,
  ],
})
export class AppModule {}
