import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    //se as senhas coincidem
    if (createUsuarioDto.senha !== createUsuarioDto.confirmarSenha) {
      throw new ConflictException('As senhas digitadas não são iguais');
    }

    try {
      // separarei o confirmarSenha para não tentar salvar no banco
      const { confirmarSenha, ...dadosParaSalvar } = createUsuarioDto;

      const novoUsuario = this.usuarioRepository.create(dadosParaSalvar);
      return await this.usuarioRepository.save(novoUsuario);
    } catch (error) {
      //erro de "Unique Violation"
      if (error.code === '23505') {
        throw new ConflictException('Este e-mail já está cadastrado no PetHub');
      }
      throw error;
    }
  }

  async findAll() {
    // retorna todos os usuários e mostra quais pets eles cadastraram
    return await this.usuarioRepository.find({ relations: ['pets'] });
  }

  async findOne(id: number) {
    const usuario = await this.usuarioRepository.findOne({
      where: { id },
      relations: ['pets'], // Mostra os pets do usuário se ele for um doador
    });

    if (!usuario) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }

    return usuario;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.usuarioRepository.preload({
      id: id,
      ...updateUsuarioDto,
    });

    if (!usuario) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }

    return this.usuarioRepository.save(usuario);
  }

  async remove(id: number) {
    const usuario = await this.findOne(id); //valida se existe
    return await this.usuarioRepository.remove(usuario);
  }
}
