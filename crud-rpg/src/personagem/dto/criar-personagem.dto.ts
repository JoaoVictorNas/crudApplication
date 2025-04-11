import { IsEnum, IsInt, IsNotEmpty, Max, Min } from 'class-validator';
import { PersonagemClasse } from '../../common/enums/classe.enum';

export class CriarPersonagemDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  nomeAventureiro: string;

  @IsEnum(PersonagemClasse)
  classe: PersonagemClasse;

  @IsInt()
  level: number;

  @IsInt()
  @Min(0)
  @Max(10)
  forca: number;

  @IsInt()
  @Min(0)
  @Max(10)
  defesa: number;
}
