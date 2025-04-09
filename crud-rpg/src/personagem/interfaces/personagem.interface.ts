import { PersonagemClasse } from '../../common/enums/classe.enum';

export interface Item {
  tipo: string;
  forca: number;
  defesa: number;
}

export interface Personagem {
  id: number;
  nome: string;
  nomeAventureiro: string;
  classe: PersonagemClasse;
  level: number;
  forca: number;
  defesa: number;
  items: Item[];
}