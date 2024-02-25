import { Injectable } from '@nestjs/common';
import { Report } from './interfaces';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ReportService {
  prisma = new PrismaClient();

  async getReportedAccounts(): Promise<Report[]> {
    const reportedAccounts = await this.prisma.reportedAccount.findMany({
      include: { reports: true, network: true },
    });

    const response = reportedAccounts.map((reportedAccount) => {
      return {
        id: reportedAccount.id,
        tag: reportedAccount.username,
        network: reportedAccount.network.name,
        countOfReports: reportedAccount.reports.filter(
          (report) => report.reportedAccountId === reportedAccount.id,
        ).length,
        lastReportDate: reportedAccount.reports
          .filter((report) => report.reportedAccountId === reportedAccount.id)
          .sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
          )[0]
          .createdAt.toISOString(),
      };
    });

    return response;
  }
}
