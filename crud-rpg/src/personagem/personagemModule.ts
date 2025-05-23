import { Module } from '@nestjs/common';
import { PersonagemController } from './personagem.controller';
import { PersonagemService } from './personagem.service';

@Module({
  controllers: [PersonagemController],
  providers: [PersonagemService],
  exports: [PersonagemService],
})
export class PersonagemModule {}