import React, { useEffect, useState } from 'react';

/* components */
import { LineChart, PortSelection } from '@nx-ports/shared-ui';

/* utils */
import {
  useAirPortCodes,
  useMarketRates,
  marketPositions,
} from '@nx-ports/shared-ui';

/* Styles */
import { Wrapper, ChartData } from './styled';
import MarketPosition, { MarketPostionProps } from '../MarketPostion';

interface Port {
  name: string;
  code: string;
}

interface MarketRate {
  day: string;
  high: number;
  low: number;
  mean: number;
}

const TimeSeriesChart: React.FC = () => {
  const { airportCodes } = useAirPortCodes();
  const { marketRates, fetchMarketRates } = useMarketRates();
  console.log('🚀 ~ marketRates:', marketRates);

  const [originPort, setOriginPort] = useState<Port | null>(null);
  const [destinationPort, setDestinationPort] = useState<Port | null>(null);
  const [checkedCheckboxes, setCheckedCheckboxes] = useState<
    MarketPostionProps[]
  >([marketPositions[0]]);

  const portsSelected = originPort?.code && destinationPort?.code;
  const noMarketRates = marketRates?.every(
    (d: MarketRate) => !d.high && !d.low && !d.mean
  );

  useEffect(() => {
    if (portsSelected) {
      fetchMarketRates({
        origin: originPort.code,
        destination: destinationPort.code,
      });
    }
  }, [portsSelected, originPort, destinationPort]);

  return (
    <Wrapper>
      <ChartData>
        <PortSelection
          data={airportCodes}
          originPort={originPort}
          setOriginPort={setOriginPort}
          destinationPort={destinationPort}
          setDestinationPort={setDestinationPort}
        />
        <LineChart
          marketRates={marketRates}
          noMarketRates={noMarketRates}
          portsSelected={portsSelected}
          marketPostions={checkedCheckboxes}
        />
      </ChartData>
      {portsSelected && !noMarketRates && (
        <MarketPosition
          checkedCheckboxes={checkedCheckboxes}
          setCheckedCheckboxes={setCheckedCheckboxes}
        />
      )}
    </Wrapper>
  );
};

export default TimeSeriesChart;
