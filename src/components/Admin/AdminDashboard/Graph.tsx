import * as React from 'react';
import { Box } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { chartMockData, IChartMockData } from './mockup';

export const BasicLineChart: React.FC = () => {
  const xAxisData = chartMockData.map((data: IChartMockData) => data.year);

  return (
    <Box className="line-chart-wrapper">
      <LineChart
        xAxis={[{ data: xAxisData }]}
        series={[
          {
            data: chartMockData.map((data: IChartMockData) => data.revenue),
            area: true
          }
        ]}>
        <defs>
          <linearGradient id="myGradient" gradientTransform="rotate(90)">
            <stop offset="-97.87%" stopColor="rgba(20, 168, 0, 0.50)" />
            <stop offset="68.9%" stopColor="rgba(20, 168, 0, 0.00)" />
          </linearGradient>
        </defs>
      </LineChart>
    </Box>
  );
};
