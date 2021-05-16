//import { Controller, Get, Param, Query } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
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
}
