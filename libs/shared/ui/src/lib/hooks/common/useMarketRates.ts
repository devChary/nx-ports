import { useState } from 'react';
import { getMarketRates, MarketRatesParams } from '../../api-interface';

export default function useMarketRates() {
  const [marketRates, setMarketRates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMarketRates = async ({
    origin,
    destination,
    freightMode,
  }: MarketRatesParams) => {
    try {
      setIsLoading(true);
      const response = await getMarketRates({
        origin,
        freightMode,
        destination,
      });
      setIsLoading(false);
      setMarketRates(response);
    } catch (err) {
      setIsLoading(false);
      setMarketRates([]);
    }
  };

  return { isLoading, marketRates, fetchMarketRates };
}
