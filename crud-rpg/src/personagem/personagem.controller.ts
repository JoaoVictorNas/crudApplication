import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { PersonagemService } from './personagem.service';
import { CriarPersonagemDto } from './dto/criar-personagem.dto';
import { AtualizarNomeAventureiroDto } from './dto/atualizar-nome-aventureiro.dto';

@Controller('personagem')
export class PersonagemController {
  constructor(private readonly personagemService: PersonagemService) {}

  @Post()
  criar(@Body() dto: CriarPersonagemDto) {
    return this.personagemService.create(dto);
  }

  @Get()
  listar() {
    return this.personagemService.findAll();
  }

  @Get(':id')
  buscarPorId(@Param('id') id: string) {
    return this.personagemService.findOne(Number(id));
  }

  @Patch(':id/nome-aventureiro')
  atualizarNome(@Param('id') id: string, @Body() dto: AtualizarNomeAventureiroDto) {
    return this.personagemService.updateNomeAventureiro(Number(id), dto.nomeAventureiro);
  }

  @Delete(':id')
  remover(@Param('id') id: string) {
    return this.personagemService.remove(Number(id));
  }

  @Get(':id/itens')
  listarItens(@Param('id') id: string) {
    return this.personagemService.listarItens(Number(id));
  }

  @Get(':id/amuleto')
  buscarAmuleto(@Param('id') id: string) {
    return this.personagemService.buscarAmuleto(Number(id));
  }

  @Delete(':id/itens/:nome')
  removerItem(@Param('id') id: string, @Param('nome') nome: string) {
    return this.personagemService.removerItem(Number(id), nome);
  }
}