import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportController } from './report/report.controller';
import { ReportModule } from './report/report.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ReportModule,
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
  ],
  controllers: [AppController, ReportController],
  providers: [AppService],
})
export class AppModule {}
