import React, { useEffect, useState } from 'react';

/* components */
import {
  LineChart,
  PortSelection,
  useMarketRates,
  marketPositions,
  MarketPosition,
  Loader,
} from '@nx-ports/shared-ui';

/* Styles */
import { Wrapper, ChartData } from './styled';

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

interface TimeSeriesProps {
  freightCodes: any;
  appMeta: any;
}

const TimeSeriesChart: React.FC<TimeSeriesProps> = (props) => {
  const { freightCodes, appMeta } = props || {};

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
        freightMode: appMeta.freightMode,
        origin: originPort.code,
        destination: destinationPort.code,
      });
    }
  }, [portsSelected, originPort, destinationPort]);

  return (
    <Wrapper>
      <ChartData>
        <PortSelection
          data={freightCodes}
          originPort={originPort}
          setOriginPort={setOriginPort}
          destinationPort={destinationPort}
          setDestinationPort={setDestinationPort}
        />
        {isLoading ? (
          <Loader themeColor={appMeta.themeColor} />
        ) : (
          <LineChart
            themeColor={appMeta.themeColor}
            marketRates={marketRates}
            noMarketRates={noMarketRates}
            portsSelected={portsSelected}
            marketPostions={checkedCheckboxes}
          />
        )}
      </ChartData>
      {portsSelected && !noMarketRates && !isLoading && (
        <MarketPosition
          checkedCheckboxes={checkedCheckboxes}
          setCheckedCheckboxes={setCheckedCheckboxes}
        />
      )}
    </Wrapper>
  );
};

export default TimeSeriesChart;
