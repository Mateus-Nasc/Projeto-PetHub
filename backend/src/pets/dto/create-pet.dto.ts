import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreatePetDto {
  @IsString({ message: 'A idade deve ser um texto' })
  @IsNotEmpty({ message: 'A idade não pode estar vazia' })
  idade: string;

  @IsString({ message: 'A cor deve ser um texto' })
  @IsNotEmpty({ message: 'A cor não pode estar vazia' })
  cor: string;

  @IsString({ message: 'A raça deve ser um texto' })
  @IsNotEmpty({ message: 'A raça não pode estar vazia' })
  raca: string;

  @IsString({ message: 'O sexo deve ser um texto' })
  @IsNotEmpty({ message: 'O sexo não pode estar vazio' })
  sexo: string;

  // Recebemos apenas o ID numérico do front
  @IsInt({ message: 'O ID do doador deve ser um número inteiro' })
  @IsNotEmpty({ message: 'O ID do doador é obrigatório' })
  doadorId: number;
}
