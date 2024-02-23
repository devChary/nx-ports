/* eslint-disable no-debugger */
import { useState } from 'react';
import { getMarketRates, MarketRatesParams } from '../../api-interface';

export default function useMarketRates() {
  const [marketRates, setMarketRates] = useState([]);

  const fetchMarketRates = async ({
    origin,
    destination,
  }: MarketRatesParams) => {
    try {
      const response = await getMarketRates({
        origin,
        destination,
      });
      setMarketRates(response);
    } catch (err) {
      setMarketRates([]);
    }
  };

  return { marketRates, fetchMarketRates };
}
