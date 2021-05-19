import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],
  ) {}
  getHello(): any {
    //console.log(this.tasks);
    return `Hello ${this.apiKey}`;
    //return this.tasks;
  }
}
