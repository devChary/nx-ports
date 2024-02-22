import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LineChartProps {}

const StyledLineChart = styled.div`
  color: pink;
`;

export function LineChart(props: LineChartProps) {
  return (
    <StyledLineChart>
      <h1>Welcome to LineChart!</h1>
    </StyledLineChart>
  );
}

export default LineChart;
