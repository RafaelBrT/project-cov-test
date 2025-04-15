import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    if (1 + 1 === 2) return 'pr test'
    return 'Hello World!';
  }
}
