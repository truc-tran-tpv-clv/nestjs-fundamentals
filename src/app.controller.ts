import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { APP_SERVICE_TOKEN, AppService } from './app.service';
import { RegisterRequest } from './app.dto';

@Controller()
export class AppController {
  constructor(
    @Inject(APP_SERVICE_TOKEN)
    private readonly appService: AppService,
  ) {
    //
  }

  @Get('healthcheck')
  healthcheck() {
    return this.appService.getHello();
  }

  @Post('register')
  async register(@Body() registerRequest: RegisterRequest) {
    return registerRequest;
  }
}
