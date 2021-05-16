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
  Res,
} from '@nestjs/common';

import { Response } from 'express';

import { ProductService } from '../services/product.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}
  //query con asignacion previa
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 25,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    // };

    return this.productService.findAll();
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
    return this.productService.findOne(+productId);
  }

  // aplicando any para el parametro
  @Post()
  create(@Body() payload: any) {
    // return {
    //   message: `accion de crear`,
    //   payload,
    // };
    return this.productService.create(payload);
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
  update(@Param('id') id: string, @Body() payload: any) {
    // return {
    //   id,
    //   payload,
    // };
    return this.productService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.delete(+id);
  }
}
