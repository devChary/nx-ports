import { render } from '@testing-library/react';
import PortSelection from './port-selection'; // Assuming the file name is Destinations.tsx

describe('Destinations Component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PortSelection
        data={[
          {
            name: 'Port A',
            code: 'A',
          },
          {
            name: 'Port B',
            code: 'B',
          },
        ]}
        setDestinationPort={() => {
          console.log('Destination Port set');
        }}
        setOriginPort={() => {
          console.log('Origin Port set');
        }}
        originPort={null}
        destinationPort={null}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
