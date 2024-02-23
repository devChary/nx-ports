/* eslint-disable no-debugger */
import { useState, useEffect, useCallback } from 'react';
import { getAirportCodes } from '../../api-interface';

export default function useAirPortCodes() {
  const [airportCodes, setAirportCodes] = useState([]);

  const fetchAirportCodes = useCallback(async () => {
    debugger;
    try {
      const response = await getAirportCodes();
      setAirportCodes(response);
    } catch (err) {
      setAirportCodes([]);
    }
  }, []);

  useEffect(() => {
    fetchAirportCodes();
  }, [fetchAirportCodes]);

  return { airportCodes, fetchAirportCodes };
}
