import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from './pet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,
  ) {}

  //padronizando os erros
  throwNotFoundError() {
    throw new NotFoundException('Pet não encontrado');
  }

  async create(createPetDto: CreatePetDto) {
    // Aqui é o objeto que o typeorm vai salvar.
    //a linha do "doador" cria o relacionamento usando o id enviado do front
    const dadosPet = {
      idade: createPetDto.idade,
      cor: createPetDto.cor,
      raca: createPetDto.raca,
      sexo: createPetDto.sexo,
      doador: { id: createPetDto.doadorId }, //1:N
    };

    const novoPet = this.petRepository.create(dadosPet);
    await this.petRepository.save(novoPet);

    return novoPet;
  }

  async findAll() {
    //relations: ['doador'] avisa o orm para não trazer só o pet,
    // mas também os dados do dono que está doando
    return await this.petRepository.find({
      relations: ['doador'],
    });
  }

  async findOne(id: number) {
    const pet = await this.petRepository.findOne({
      where: { id },
      relations: ['doador'],
    });

    if (!pet) {
      this.throwNotFoundError();
    }

    return pet;
  }

  /*
  async update(id: number, updatePetDto: UpdatePetDto) {
  }
  */

  async remove(id: number) {
    const pet = await this.petRepository.findOneBy({ id });

    if (!pet) {
      this.throwNotFoundError();
    }

    // aqui deleta o pet do banco de dados e retorna o objeto removido
    return this.petRepository.remove(pet!);
  }
}
