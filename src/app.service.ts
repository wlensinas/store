import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    //@Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],
    private config: ConfigService,
  ) {}
  getHello(): any {
    const apiKey = this.config.get<string>('API_KEY');
    const dbName = this.config.get<string>('DATABASE_NAME');
    return `api: ${apiKey} db: ${dbName}`;
    //return this.tasks;
  }
}
