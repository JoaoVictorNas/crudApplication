import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { PersonagemService } from './personagem.service';
import { CriarPersonagemDto } from './dto/criar-personagem.dto';
import { Personagem } from './interfaces/personagem.interface';

@Controller('Personagem')
export class PersonagemController {
  constructor(private readonly personagemService: PersonagemService) {}

  @Post()
  criarPersonagem(@Body() dto: CriarPersonagemDto): Personagem {
    return this.personagemService.create(dto);
  }

  @Get()
  listarPersonagem(): Personagem[] {
    return this.personagemService.findAll();
  }

  @Get(':id')
  pegarPersonagem(@Param('id') id: string): Personagem {
    return this.personagemService.findOne(Number(id));
  }
}