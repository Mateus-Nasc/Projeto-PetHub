import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
// import { UpdatePetDto } from './dto/update-pet.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  create(@Body() createPetDto: CreatePetDto) {
    console.log(
      '[POST /pets] Cadastrando novo pet recebido no JSON:',
      createPetDto,
    );
    return this.petsService.create(createPetDto);
  }

  @Get()
  findAll() {
    console.log('[GET /pets] Listando todos os pets');
    return this.petsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    console.log(`[GET /pets/${id}] Buscando dados de um pet específico`);
    return this.petsService.findOne(id);
  }
  /*
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePetDto: UpdatePetDto) {
    console.log(`[PATCH /pets/${id}] Atualizando pet`);
    return this.petsService.update(id, updatePetDto);
  }
  */

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    console.log(`[DELETE /pets/${id}] Removendo pet do sistema`);
    return this.petsService.remove(id);
  }
}
