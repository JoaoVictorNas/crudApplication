import { IsEnum, IsInt, IsNotEmpty, Max, Min } from 'class-validator';
import { ItemTipo } from '../../common/enums/tipo-item.enum';

export class CriarItemMagicoDto {
  @IsNotEmpty()
  nome: string;

  @IsEnum(ItemTipo)
  tipo: ItemTipo;

  @IsInt()
  @Min(0)
  @Max(10)
  forca: number;

  @IsInt()
  @Min(0)
  @Max(10)
  defesa: number;

  @IsInt()
  personagemId: number;
}
