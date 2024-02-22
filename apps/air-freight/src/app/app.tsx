import styled from 'styled-components';

import NxWelcome from './nx-welcome';
import { EmptyState } from '@nx-ports/shared-ui';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="air-freight" />
      <EmptyState title="Random Title" subTitle="Some subtitle" />
    </StyledApp>
  );
}

export default App;
