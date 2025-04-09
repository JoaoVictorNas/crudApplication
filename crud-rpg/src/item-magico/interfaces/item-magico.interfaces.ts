import { ItemTipo } from '../../common/enums/tipo-item.enum';

export interface ItemMagico {
  nome: string;
  tipo: ItemTipo;
  forca: number;
  defesa: number;
}
