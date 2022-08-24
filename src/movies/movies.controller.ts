import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return `Get All Movies`;
  }

  @Get(`search`)
  search(@Query(`year`) searchingYear: string) {
    return `we are searching the title of the movie made after ${searchingYear}`;
  }

  @Get(`/:id`)
  getOne(@Param(`id`) id: string) {
    return `One Movie ${id}`;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return movieData;
  }

  @Delete(`/:id`)
  remove(@Param(`id`) movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch(`/:id`)
  patch(@Param(`id`) movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
