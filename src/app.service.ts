import { Injectable, Scope } from '@nestjs/common';

export const APP_SERVICE_TOKEN = 'AppService';

@Injectable({ scope: Scope.REQUEST })
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
