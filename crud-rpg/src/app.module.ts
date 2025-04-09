import { Module } from '@nestjs/common';
import { PersonagemModule } from './personagem/personagemModule';
import { ItemMagicoModule } from './item-magico/item-magico.module';

@Module({
  imports: [PersonagemModule, ItemMagicoModule],
})
export class AppModule {}