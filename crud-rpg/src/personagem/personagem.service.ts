import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CriarPersonagemDto } from './dto/criar-personagem.dto';
import { Personagem } from './interfaces/personagem.interface';
import { PersonagemClasse } from '../common/enums/classe.enum';
import { ItemMagico } from '../item-magico/interfaces/item-magico.interfaces';

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

  updateNomeAventureiro(id: number, nomeAventureiro: string): Personagem {
    const personagem = this.personagens.find((char) => char.id === id);
    if (!personagem) throw new NotFoundException('Personagem não encontrado.');

    personagem.nomeAventureiro = nomeAventureiro;
    return personagem;
  }

  remove(id: number) {
    const index = this.personagens.findIndex((char) => char.id === id);
    if (index === -1) throw new NotFoundException('Personagem não encontrado.');

    this.personagens.splice(index, 1);
    return { message: 'Personagem removido com sucesso.' };
  }

  addItem(personagemId: number, item: ItemMagico) {
    const personagem = this.personagens.find((char) => char.id === personagemId);
    if (!personagem) throw new NotFoundException('Personagem não encontrado.');

    if (item.tipo === 'Amuleto') {
      const jaTemAmuleto = personagem.items.some((i) => i.tipo === 'Amuleto');
      if (jaTemAmuleto) {
        throw new BadRequestException('Personagem só pode ter um amuleto.');
      }
    }

    personagem.items.push(item);
    return item;
  }

  listarItens(personagemId: number) {
    const personagem = this.personagens.find((char) => char.id === personagemId);
    if (!personagem) throw new NotFoundException('Personagem não encontrado.');

    return personagem.items;
  }

  buscarAmuleto(personagemId: number) {
    const personagem = this.personagens.find((char) => char.id === personagemId);
    if (!personagem) throw new NotFoundException('Personagem não encontrado.');

    const amuleto = personagem.items.find((item) => item.tipo === 'Amuleto');
    if (!amuleto) throw new NotFoundException('Personagem não possui amuleto.');

    return amuleto;
  }

  removerItem(personagemId: number, nomeItem: string) {
    const personagem = this.personagens.find((char) => char.id === personagemId);
    if (!personagem) throw new NotFoundException('Personagem não encontrado.');

    const index = personagem.items.findIndex((item) => item.nome === nomeItem);
    if (index === -1) throw new NotFoundException('Item não encontrado.');

    personagem.items.splice(index, 1);
    return { message: 'Item removido com sucesso.' };
  }
}