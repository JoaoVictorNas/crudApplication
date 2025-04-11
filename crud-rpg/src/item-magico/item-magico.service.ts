import { Injectable, BadRequestException } from '@nestjs/common';
import { CriarItemMagicoDto } from './dto/criar-item-magico.dto';
import { ItemTipo } from '../common/enums/tipo-item.enum';
import { PersonagemService } from '../personagem/personagem.service';
import { ItemMagico } from './interfaces/item-magico.interfaces';

@Injectable()
export class ItemMagicoService {
  constructor(private readonly personagemService: PersonagemService) {}

  create(dto: CriarItemMagicoDto) {
    if (dto.forca === 0 && dto.defesa === 0) {
      throw new BadRequestException('Item não pode ter força e defesa iguais a 0.');
    }

    if (dto.tipo === ItemTipo.ARMA && dto.defesa !== 0) {
      throw new BadRequestException('Itens do tipo Arma devem ter defesa igual a 0.');
    }

    if (dto.tipo === ItemTipo.ARMADURA && dto.forca !== 0) {
      throw new BadRequestException('Itens do tipo Armadura devem ter força igual a 0.');
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