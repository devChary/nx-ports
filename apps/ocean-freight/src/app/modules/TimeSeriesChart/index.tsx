import React, { useEffect, useState } from 'react';

/* components */
import {
  LineChart,
  PortSelection,
  useOceanCodes,
  useMarketRates,
  marketPositions,
  MarketPosition,
} from '@nx-ports/shared-ui';

/* Styles */
import { Wrapper, ChartData } from './styled';

/* consts */
import { APP_META } from '../../consts';

interface MarketPostionProps {
  value: string;
  label: string;
}

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
  const { oceanCodes } = useOceanCodes();
  const { isLoading, marketRates, fetchMarketRates } = useMarketRates();

  const [originPort, setOriginPort] = useState<Port | null>(null);
  const [destinationPort, setDestinationPort] = useState<Port | null>(null);
  const [checkedCheckboxes, setCheckedCheckboxes] = useState<
    MarketPostionProps[]
  >([marketPositions[0]]);

  const portsSelected = !!(originPort?.code && destinationPort?.code);
  const noMarketRates = marketRates?.every(
    (d: MarketRate) => !d.high && !d.low && !d.mean
  );

  useEffect(() => {
    if (portsSelected) {
      fetchMarketRates({
        freightMode: APP_META.freightMode,
        origin: originPort.code,
        destination: destinationPort.code,
      });
    }
  }, [portsSelected, originPort, destinationPort]);

  return (
    <Wrapper>
      <ChartData>
        <PortSelection
          data={oceanCodes}
          originPort={originPort}
          setOriginPort={setOriginPort}
          destinationPort={destinationPort}
          setDestinationPort={setDestinationPort}
        />
        <LineChart
          themeColor={APP_META.themeColor}
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
