import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';
@Injectable()
export class ProductService {
  // private products: any = [
  //   {
  //     id: 1,
  //     name: 'Product 1',
  //     description: 'Description 1',
  //     price: 122,
  //   },
  // ];
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 122,
      stock: 1,
      image: '',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
}
