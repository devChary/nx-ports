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
  data: Port[];
  destinationPort: Port | null;
  originPort: Port | null;
  setOriginPort: (port: Port) => void;
  setDestinationPort: (port: Port) => void;
}

const Destinations: React.FC<DestinationsProps> = ({
  data = [],
  originPort,
  setOriginPort,
  destinationPort,
  setDestinationPort,
}) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const originPortData = destinationPort
    ? data?.filter((d) => d.code !== destinationPort?.code)
    : data;
  const destinationPortData = originPort
    ? data?.filter((d) => d.code !== originPort?.code)
    : data;

  return (
    <PortSelectionWrapper>
      <SearchInput
        id="origin"
        name="origin"
        query={origin}
        placeholder="Enter Origin"
        data={originPortData}
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
        data={destinationPortData}
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
