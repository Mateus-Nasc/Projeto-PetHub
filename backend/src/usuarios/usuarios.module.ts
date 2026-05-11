import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { PetsModule } from '../pets/pets.module';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), PetsModule], //importa o módulo de pets para usar o serviço de pets e criar o relacionamento
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
