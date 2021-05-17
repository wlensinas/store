import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getCategories(
    @Query('limit') limit = 100,
    @Query('offset') offset = 25,
    @Query('category') brand: string,
  ) {
    return `products limit=> ${limit} offset=> ${offset} category=> ${brand}`;
  }
  @Get(':id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `product ${productId} and category ${id}`;
  }
}
