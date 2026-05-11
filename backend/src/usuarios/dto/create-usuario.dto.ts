import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @IsString({ message: 'O nome deve ser um texto' })
  @IsNotEmpty({ message: 'O campo nome não pode estar vazio' })
  nome: string;

  @IsEmail({}, { message: 'Por favor, insira um e-mail válido' })
  @IsNotEmpty({ message: 'O e-mail é obrigatório' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
  senha: string;

  @IsString()
  @IsNotEmpty({ message: 'Você precisa confirmar a sua senha' })
  confirmarSenha: string;
}
