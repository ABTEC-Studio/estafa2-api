import { Injectable } from '@nestjs/common';
import { Report } from './interfaces';

const mockedData: Report[] = [
  {
    id: 1,
    tag: '@zapatoslola',
    countOfReports: 10,
    lastReportDate: '2023-01-01',
    network: 'Instagram',
  },
  {
    id: 2,
    tag: '@indumentariapepe',
    countOfReports: 5,
    lastReportDate: '2023-01-01',
    network: 'Facebook',
  },
  {
    id: 3,
    tag: '@iphones_oliva',
    countOfReports: 87,
    lastReportDate: '2023-01-01',
    network: 'Instagram',
  },
  {
    id: 4,
    tag: '@cosmeticosmaria',
    countOfReports: 12,
    lastReportDate: '2024-02-10',
    network: 'TikTok',
  },
  {
    id: 5,
    tag: '@olivarestaurantes',
    countOfReports: 3,
    lastReportDate: '2024-02-14',
    network: 'Twitter',
  },
  {
    id: 6,
    tag: '@alquileresoliva',
    countOfReports: 17,
    lastReportDate: '2024-02-12',
    network: 'Facebook',
  },
  {
    id: 7,
    tag: '@deportesoliva',
    countOfReports: 2,
    lastReportDate: '2024-02-15',
    network: 'Instagram',
  },
  {
    id: 8,
    tag: '@mascotasfelices',
    countOfReports: 8,
    lastReportDate: '2024-02-08',
    network: 'Facebook',
  },
];

@Injectable()
export class ReportService {
  getReports(): Report[] {
    return mockedData;
  }
}
