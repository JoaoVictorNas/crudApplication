import { Module } from '@nestjs/common';
import { ItemMagicoController } from './item-magico.controller';
import { ItemMagicoService } from './item-magico.service';
import { PersonagemModule } from '../personagem/personagemModule';

@Module({
  imports: [PersonagemModule],
  controllers: [ItemMagicoController],
  providers: [ItemMagicoService],
})
export class ItemMagicoModule {}
