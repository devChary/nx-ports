/* eslint-disable no-debugger */
import { customFetch } from '../utils';

export interface MarketRatesParams {
  origin: string;
  destination: string;
}

export const getMarketRates = ({ origin, destination }: MarketRatesParams) => {
  return customFetch({
    query: `air/rates?origin=${origin}&destination=${destination}`,
  });
};

/* Air */
export { default as getAirportCodes } from './air';

/* Ocean */
export { default as getOceanCodes } from './ocean';
