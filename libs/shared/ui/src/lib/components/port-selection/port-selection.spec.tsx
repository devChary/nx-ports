import { render } from '@testing-library/react';

import PortSelection from './port-selection';

describe('PortSelection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PortSelection
        setDestinationPort={() => {
          console.log('destination Port set');
        }}
        setOriginPort={() => {
          console.log('Orgin Port set');
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
