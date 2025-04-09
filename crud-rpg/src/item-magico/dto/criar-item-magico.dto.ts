import { ItemTipo } from '../../common/enums/tipo-item.enum';

export class CriarItemMagicoDto {
  nome: string;
  tipo: ItemTipo;
  forca: number;
  defesa: number;
  personagemId: number;
}
