import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios') // a rota é /usuarios
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    console.log(
      '[POST /usuarios] Tentativa de cadastro de:',
      createUsuarioDto.email,
    );
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  async findAll() {
    console.log('[GET /usuarios] Listando todos os usuários registrados');
    return this.usuariosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    console.log(`[GET /usuarios/${id}] Buscando dados do usuário`);
    return this.usuariosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    console.log(`[PATCH /usuarios/${id}] Atualizando usuário`);
    return this.usuariosService.update(id, updateUsuarioDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    console.log(`[DELETE /usuarios/${id}] Removendo usuário do sistema`);
    return this.usuariosService.remove(id);
  }
}
