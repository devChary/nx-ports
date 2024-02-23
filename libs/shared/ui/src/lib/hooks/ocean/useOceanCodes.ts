import { useState, useEffect, useCallback } from 'react';
import { getOceanCodes } from '../../api-interface';

export default function useOceanCodes() {
  const [oceanCodes, setOceanCodes] = useState([]);

  const fetchOceanCodes = useCallback(async () => {
    try {
      const response = await getOceanCodes();
      setOceanCodes(response);
    } catch (err) {
      setOceanCodes([]);
    }
  }, []);

  useEffect(() => {
    fetchOceanCodes();
  }, [fetchOceanCodes]);

  return { oceanCodes, fetchOceanCodes };
}
