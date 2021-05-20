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
import {
  ApiTags,
  ApiOperation,
  ApiBadRequestResponse,
  ApiForbiddenResponse,
  ApiUnauthorizedResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';

import { ProductService } from '../services/product.service';

import { ParseIntPipe } from '../../common/parse-int.pipe';

import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}
  @Get()
  @ApiOperation({ summary: 'List of products' })
  @ApiOkResponse({
    description: 'List of products',
  })
  @ApiForbiddenResponse({
    description: 'Not Authorized',
  })
  @ApiNotFoundResponse({
    description: 'Not found producst',
  })
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 25,
    @Query('brand') brand: string,
  ) {
    return this.productService.findAll(limit, offset, brand);
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: `yo soy un filter`,
    };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    return this.productService.findOne(productId);
  }

  @Post()
  @ApiOperation({ summary: 'Create product' })
  @ApiUnauthorizedResponse({
    description: 'Not Authorized',
  })
  @ApiBadRequestResponse({
    description: 'bad request',
  })
  @ApiCreatedResponse({
    description: 'Product created',
  })
  create(@Body() payload: CreateProductDto) {
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
    return this.productService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.delete(+id);
  }
}
