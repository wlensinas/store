import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  //query con asignacion previa
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 25,
    @Query('brand') brand: string,
  ) {
    //return
    return {
      message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: `yo soy un filter`,
    };
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return {
      message: `product ${productId}`,
    };
  }

  // aplicando any para el parametro
  @Post()
  create(@Body() payload: any) {
    return {
      message: `accion de crear`,
      payload,
    };
  }

  // aplicando declaracion uno a uno los parametros
  // @Post()
  // create(@Body('price') price: number) {
  //   return {
  //     message: `accion de crear`,
  //     price,
  //   };
  // }
}
