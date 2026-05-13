import {
  IsString,
  IsNotEmpty,
  IsInt,
  MaxLength,
  IsEnum,
} from 'class-validator';

export class CreatePetDto {
  @IsEnum(['Cachorro', 'Gato'], {
    message: 'A espécie deve ser Cachorro ou Gato',
  })
  @IsNotEmpty({ message: 'A espécie não pode estar vazia' })
  especie: string;

  @IsString({ message: 'A raça deve ser um texto' })
  @IsNotEmpty({ message: 'A raça não pode estar vazia' })
  @MaxLength(30, { message: 'A raça deve ter no máximo 30 caracteres' })
  raca: string;

  @IsString({ message: 'A cor deve ser um texto' })
  @IsNotEmpty({ message: 'A cor não pode estar vazia' })
  cor: string;

  @IsInt({ message: 'A idade deve ser um número inteiro' })
  @IsNotEmpty({ message: 'A idade não pode estar vazia' })
  idade: number;

  @IsEnum(['Macho', 'Fêmea'], { message: 'O sexo deve ser Macho ou Fêmea' })
  @IsNotEmpty({ message: 'O sexo não pode estar vazio' })
  sexo: string;

  // recebe aqui apenas o id int do front/postman
  @IsInt({ message: 'O ID deve ser um número inteiro' })
  @IsNotEmpty({ message: 'O ID do doador é obrigatório' })
  doadorId: number;
}
