import { PersonagemClasse } from '../../common/enums/classe.enum';

export class CriarPersonagemDto {
  nome: string;
  nomeAventureiro: string;
  classe: PersonagemClasse;
  level: number;
  forca: number;
  defesa: number;
}
