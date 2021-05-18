import { Module } from '@nestjs/common';
import { UsersService } from './services/users/users.service';
import { ProductsModule } from './../products/products.module';
import { UsersController } from './controllers/users.controller';

@Module({
  imports: [ProductsModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
