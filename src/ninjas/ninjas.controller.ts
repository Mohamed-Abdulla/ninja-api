import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { createNinjaDto } from './dto/create-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  //dependency injection
  constructor(private readonly ninjasService: NinjasService) {}
  @Get()
  getNinjas() {
    return this.ninjasService.getNinjas();
  }

  //query param
  @Get('search')
  searchNinjas(@Query('name') name: string) {
    return 'ninjasService action returns ninjas with the name of ' + name;
  }

  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return 'ninjasService action returns one ninja with the id of ' + id;
  }

  @Post()
  createNinja(@Body() createNinjaDto: createNinjaDto) {
    return this.ninjasService.createNinja(createNinjaDto);
  }
}
