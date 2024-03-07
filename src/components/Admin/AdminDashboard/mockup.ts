export interface IAdminDashboardMock {
  total_jobs: number;
  total_coders: number;
  total_clients: number;
  total_revenue: number;
}

export const adminDashboardMock: IAdminDashboardMock = {
  total_jobs: 2500,
  total_coders: 5000,
  total_clients: 2000,
  total_revenue: 350000
};

export interface IChartMockData {
  year: number;
  revenue: number;
}

export const chartMockData: IChartMockData[] = [
  { year: 2013, revenue: 100 },
  { year: 2014, revenue: 150 },
  { year: 2015, revenue: 125 },
  { year: 2016, revenue: 110 },
  { year: 2017, revenue: 140 },
  { year: 2018, revenue: 180 },
  { year: 2019, revenue: 150 },
  { year: 2020, revenue: 150 },
  { year: 2021, revenue: 225 },
  { year: 2022, revenue: 210 },
  { year: 2023, revenue: 125 }
];
