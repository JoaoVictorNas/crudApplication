import { Injectable, BadRequestException } from '@nestjs/common';
import { CriarItemMagicoDto } from './dto/criar-item-magico.dto';
import { ItemTipo } from '../common/enums/tipo-item.enum';
import { PersonagemService } from '../personagem/personagem.service';
import { ItemMagico } from './interfaces/item-magico.interfaces';

@Injectable()
export class ItemMagicoService {
  constructor(private readonly personagemService: PersonagemService) {}

  create(dto: CriarItemMagicoDto) {
    if (!Object.values(ItemTipo).includes(dto.tipo)) {
      throw new BadRequestException('Tipo de item inválido.');
    }

    const item: ItemMagico = {
      nome: dto.nome,
      tipo: dto.tipo,
      forca: dto.forca,
      defesa: dto.defesa,
    };

    return this.personagemService.addItem(dto.personagemId, item);
  }
}
