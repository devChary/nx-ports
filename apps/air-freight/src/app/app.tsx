import styled from 'styled-components';

import TimeSeriesChart from './components/TimeSeriesChart';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <TimeSeriesChart />
    </StyledApp>
  );
}

export default App;
