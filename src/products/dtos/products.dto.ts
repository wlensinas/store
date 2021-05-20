import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';

//import { PartialType } from '@nestjs/mapped-types';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'name' })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'description' })
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({ description: 'price' })
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({ description: 'stock' })
  readonly stock: number;

  @IsUrl() //valida que sea una url
  @IsNotEmpty()
  @ApiProperty({
    description: 'url of image',
    example: 'https://image.com/pic.jpg',
  })
  readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
