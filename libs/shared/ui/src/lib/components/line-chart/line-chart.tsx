/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-this-alias */
import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

import { EmptyState } from '../empty-state/empty-state';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip
);

const EmptyWrapper = styled.div`
  padding: 50px 100px;
`;

const ChartWrapper = styled.div`
  width: 800px;
  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

interface MarketRate {
  day: string;
  high: number;
  low: number;
  mean: number;
}

interface MarketPosition {
  value: string;
  label: string;
}

interface Props {
  marketRates: MarketRate[];
  noMarketRates: boolean;
  marketPostions: MarketPosition[];
  portsSelected: boolean;
  themeColor: string;
}

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

const LineChart: React.FC<Props> = ({
  themeColor,
  marketRates,
  noMarketRates,
  marketPostions,
  portsSelected,
}) => {
  const [chartData, setChartData] = useState<any>(null);

  const curatedData = marketRates.map((d) => ({
    date: d.day,
    high: +d.high,
    low: +d.low,
    'mid-high': +((d.high || 0 + d.mean || 0) / 2),
    'mid-low': +((d.low || 0 + d.mean || 0) / 2),
    average: +d.mean,
  }));

  const generateChart = () => {
    const labels = curatedData.map((rate, index) => {
      const d = new Date(rate.date);
      return `${d.getDate()} ${monthNames[d.getMonth()]}`;
    });

    const datasets = marketPostions?.map((pos) => ({
      label: `${pos.label}`,
      data: curatedData.map((r: any) => r[pos.value]),
      fill: false,
      borderColor: themeColor,
    }));

    setChartData({
      labels: labels,
      datasets,
    });
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    showScale: true,
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
    plugins: {
      title: {
        display: true,
        text: 'Freight Market Data',
      },
      tooltip: {
        display: true,
      },
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          stepSize: 1,
          callback: function (val: number, index: number): string {
            const that: any = this;
            return index % 4 === 0 ? that.getLabelForValue(val) : '';
          },
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
          callback: function (val: number, index: number) {
            return val ? `$${val}` : '';
          },
        },
      },
    },
  };

  useEffect(() => {
    if (marketRates?.length > 0 && !noMarketRates && marketPostions) {
      generateChart();
    }
  }, [marketRates, noMarketRates, marketPostions]);

  if (noMarketRates && portsSelected) {
    return (
      <EmptyWrapper>
        <EmptyState
          title="No data found!"
          subTitle="No market prices available for the selected ports. Please try again by selecting different ports."
        />
      </EmptyWrapper>
    );
  }

  return (
    <ChartWrapper>
      {chartData && <Line data={chartData} options={options} />}
    </ChartWrapper>
  );
};

export default LineChart;
