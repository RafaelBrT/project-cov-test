import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(teste?: string): string {
    return teste || 'Hello World!';
  }
}
