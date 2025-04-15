import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(teste?: string): string {
    if (teste === 'que isso') new NotFoundException('opa')
    return teste || 'Hello World!';
  }
}
