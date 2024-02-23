import styled from 'styled-components';
import TimeSeriesChart from './modules/TimeSeriesChart';

import { Header } from '@nx-ports/shared-ui';

import { APP_META } from './consts';

const StyledApp = styled.div``;

export function App() {
  return (
    <StyledApp>
      <Header
        themeColor={APP_META.themeColor}
        freightLabel={APP_META.freightLabel}
      />
      <TimeSeriesChart />
    </StyledApp>
  );
}

export default App;
