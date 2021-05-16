import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';

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
  @HttpCode(HttpStatus.ACCEPTED)
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

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
