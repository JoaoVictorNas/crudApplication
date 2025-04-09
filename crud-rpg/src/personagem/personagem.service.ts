import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CriarPersonagemDto } from './dto/criar-personagem.dto';
import { Item, Personagem } from './interfaces/personagem.interface';
import { PersonagemClasse } from 'src/common/enums/classe.enum';

@Injectable()
export class PersonagemService {
  private personagens: Personagem[] = [];
  private Id = 1;

  create(dto: CriarPersonagemDto): Personagem {
    if (!Object.values(PersonagemClasse).includes(dto.classe)) {
      throw new BadRequestException('Classe inválida.');
    }

    const totalPoints = dto.forca + dto.defesa;
    if (totalPoints > 10) {
      throw new BadRequestException('A soma de força e defesa não pode ultrapassar 10 pontos.');
    }

    const novoPersonagem: Personagem = {
      id: this.Id++,
      ...dto,
      items: [],
    };

    this.personagens.push(novoPersonagem);
    return novoPersonagem;
  }

  findAll() {
    return this.personagens.map((char) => {
      const bonusForca = char.items.reduce((acc, item) => acc + item.forca, 0);
      const bonusDefesa = char.items.reduce((acc, item) => acc + item.defesa, 0);
      return {
        ...char,
        totalStrength: char.forca + bonusForca,
        totalDefense: char.defesa + bonusDefesa,
      };
    });
  }

  findOne(id: number): Personagem {
    const personagem = this.personagens.find((char) => char.id === id);
    if (!personagem) throw new NotFoundException('Personagem não encontrado.');

    const bonusForca = personagem.items.reduce((acc, item) => acc + item.forca, 0);
    const bonusDefesa = personagem.items.reduce((acc, item) => acc + item.defesa, 0);

    return {
      ...personagem,
      forca: personagem.forca + bonusForca,
      defesa: personagem.defesa + bonusDefesa,
    };
  }

  addItem(personagemId: number, item: Item) {
    const personagem = this.personagens.find((char) => char.id === personagemId);
    if (!personagem) throw new NotFoundException('Personagem não encontrado.');

    if (item.tipo === 'Amuleto') {
      const terAmuleto = personagem.items.some((i) => i.tipo === 'Amuleto');
      if (terAmuleto) {
        throw new BadRequestException('Cada personagem só pode ter um Amuleto.');
      }
    }

    personagem.items.push(item);
    return item;
  }
}