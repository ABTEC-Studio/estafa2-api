import { Controller, Get } from '@nestjs/common';
import { ReportService } from './report.service';
import { Report } from './interfaces';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get()
  async findAll(): Promise<Report[]> {
    return await this.reportService.getReportedAccounts();
  }
}
