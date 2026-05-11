import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsString({ message: 'O nome deve ser um texto' })
  @IsNotEmpty({ message: 'O campo nome não pode estar vazio' })
  @MinLength(4)
  @MaxLength(60)
  nome: string;

  @IsEmail({}, { message: 'Insira um e-mail válido' })
  @IsNotEmpty({ message: 'O e-mail é obrigatório' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
  senha: string;

  @IsString()
  @IsNotEmpty({ message: 'Você precisa confirmar a sua senha' })
  confirmarSenha: string;
}
