import React, { useState } from 'react';

/* Components */
import SearchInput from '../search-input/search-input';

/* utils | assets */
// import { useQuery } from 'utils';

import Arrow from '../../assets/arrow-symbol.png';

/* Styles */
import { PortSelectionWrapper, ArrowImg } from './styled';

interface Port {
  name: string;
  code: string;
}

interface DestinationsProps {
  setOriginPort: (port: Port) => void;
  setDestinationPort: (port: Port) => void;
}

const Destinations: React.FC<DestinationsProps> = ({
  setOriginPort,
  setDestinationPort,
}) => {
  const portsData = [{ name: '', code: '' }];
  // const {
  //   data: portsData,
  // } = useQuery({ query: 'ports' });

  const [origin, setOrigin] = useState<string>('');
  const [destination, setDestination] = useState<string>('');

  return (
    <PortSelectionWrapper>
      <SearchInput
        id="origin"
        name="origin"
        query={origin}
        placeholder="Enter Origin"
        data={portsData}
        handleChange={(event) => setOrigin(event.target.value)}
        handleClick={(port) => {
          setOrigin(`${port.name} (${port.code})`);
          setOriginPort(port);
        }}
      />
      <ArrowImg alt="arrow" src={Arrow} />
      <SearchInput
        id="destination"
        name="destination"
        query={destination}
        placeholder="Enter Destination"
        data={portsData}
        handleChange={(event) => setDestination(event.target.value)}
        handleClick={(port) => {
          setDestination(`${port.name} (${port.code})`);
          setDestinationPort(port);
        }}
      />
    </PortSelectionWrapper>
  );
};

export default Destinations;
