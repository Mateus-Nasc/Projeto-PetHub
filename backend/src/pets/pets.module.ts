import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  controllers: [PetsController],
  providers: [PetsService],
  exports: [PetsService], //exporta o serviço para que ele possa ser usado no módulo de usuários, para criar o relacionamento
})
export class PetsModule {}
