//import { Controller, Get, Param, Query } from '@nestjs/common';
import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return `Hola Mundo`;
  }

  @Get('nuevo')
  newEndpoint(): string {
    return `yo soy nuevo`;
  }

  @Get('/ruta/')
  hello(): string {
    return `con /sas/`;
  }

  // una forma de recibir parametros
  // @Get('products/:productId')
  // getProduct(@Param() params: any) {
  //   return `product ${params.productId}`;
  // }

  // @Get('products/:productId')
  // getProduct(@Param('productId') productId: string) {
  //   return `product ${productId}`;
  // }

  // @Get('categories/:id/products/:productId')
  // getCategory(@Param('id') id: string, @Param('productId') productId: string) {
  //   return `product ${productId} and category ${id}`;
  // }

  // Forma de declarar query sin asignacion previa
  // @Get('products')
  // getProduct(
  //   @Query('limit') limit: number,
  //   @Query('offset') offset: number,
  //   @Query('brand') brand: string,
  // ) {
  //   return `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  // }

  //query con asignacion previa
  @Get('products')
  getProduct(
    @Query('limit') limit = 100,
    @Query('offset') offset = 25,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }
}
