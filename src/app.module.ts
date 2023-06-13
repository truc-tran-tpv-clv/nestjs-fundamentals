import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { APP_SERVICE_TOKEN, AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: APP_SERVICE_TOKEN,
      useClass: AppService,
    },
  ],
})
export class AppModule {}
