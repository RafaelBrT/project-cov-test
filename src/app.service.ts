import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(teste?: string): string {
    if (teste === 'que isso') new NotFoundException('opa')
    if (teste === 'que isso2') new NotFoundException('opa2')
    if (teste === 'que isso3') new NotFoundException('opa3')

    return teste || 'Hello World!';
  }
}
