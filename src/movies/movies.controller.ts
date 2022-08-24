import { Controller, Delete, Get, Param, Patch } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return `Get All Movies`;
  }

  @Get(`/:id`)
  getOne(@Param(`id`) id: string) {
    return `One Movie ${id}`;
  }

  @Delete(`/:id`)
  remove(@Param(`id`) movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch(`/:id`)
  patch(@Param(`id`) movieId: string) {
    return `This will update  movie with the id: ${movieId}`;
  }
}
