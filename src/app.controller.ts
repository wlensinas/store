import { Controller, Get, Param } from '@nestjs/common';
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

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `product ${productId} and category ${id}`;
  }
}
