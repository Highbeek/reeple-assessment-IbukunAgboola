import {useQuery} from 'react-query';
import {fetchRate} from './api';

const FETCH_EXCHANGE_RATES = 'fetchExchangeRates';

export const useFetchExchangeRates = () => {
  return useQuery(FETCH_EXCHANGE_RATES, fetchRate, {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10,
    cacheTime: 1000 * 60 * 30,
  });
};
