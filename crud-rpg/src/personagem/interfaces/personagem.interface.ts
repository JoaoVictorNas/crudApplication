import { PersonagemClasse } from '../../common/enums/classe.enum';
import { ItemMagico } from '../../item-magico/interfaces/item-magico.interfaces';

export interface Personagem {
  id: number;
  nome: string;
  nomeAventureiro: string;
  classe: PersonagemClasse;
  level: number;
  forca: number;
  defesa: number;
  items: ItemMagico[];
}