import { Module } from '@nestjs/common';
import { ReportService } from './report.service';

@Module({
  imports: [],
  providers: [ReportService],
  exports: [ReportService],
})
export class ReportModule {}
