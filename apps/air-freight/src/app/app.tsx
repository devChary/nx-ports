import styled from 'styled-components';

import { Header, useAirPortCodes, TimeSeriesChart } from '@nx-ports/shared-ui';

import { APP_META } from './consts';

const StyledApp = styled.div``;

export function App() {
  const { airportCodes } = useAirPortCodes();
  return (
    <StyledApp>
      <Header
        themeColor={APP_META.themeColor}
        freightLabel={APP_META.freightLabel}
      />
      <TimeSeriesChart freightCodes={airportCodes} appMeta={APP_META} />
    </StyledApp>
  );
}

export default App;
