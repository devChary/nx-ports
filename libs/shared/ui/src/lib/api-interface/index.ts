import { customFetch } from '../utils';

export interface MarketRatesParams {
  origin: string;
  destination: string;
  freightMode: string;
}

export const getMarketRates = ({
  freightMode,
  origin,
  destination,
}: MarketRatesParams) => {
  return customFetch({
    query: `/${freightMode}/rates?origin=${origin}&destination=${destination}`,
  });
};

/* Air */
export { default as getAirportCodes } from './air';

/* Ocean */
export { default as getOceanCodes } from './ocean';
