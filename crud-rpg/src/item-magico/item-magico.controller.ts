import { Controller, Post, Body } from '@nestjs/common';
import { ItemMagicoService } from './item-magico.service';
import { CriarItemMagicoDto } from './dto/criar-item-magico.dto';

@Controller('magic-items')
export class ItemMagicoController {
  constructor(private readonly itemService: ItemMagicoService) {}

  @Post()
  createItem(@Body() dto: CriarItemMagicoDto) {
    return this.itemService.create(dto);
  }
}
