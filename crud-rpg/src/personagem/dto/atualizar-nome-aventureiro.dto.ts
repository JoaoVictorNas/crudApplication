import { IsNotEmpty } from 'class-validator';

export class AtualizarNomeAventureiroDto {
  @IsNotEmpty()
  nomeAventureiro: string;
}
