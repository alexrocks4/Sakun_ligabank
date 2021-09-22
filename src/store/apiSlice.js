import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import dayjs from 'dayjs';
import { createSelector } from 'reselect';
import { Currency, PERIOD_IN_DAYS } from '../const';

const CURRENCIES_API_BASE_URL = 'https://api.frankfurter.app/';
const API_DAY_FORMAT = 'YYYY-MM-DD';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: CURRENCIES_API_BASE_URL }),
  endpoints: (build) => ({
    fetchCurrenciesData: build.query({
      async queryFn(currentDate, _queryApi, _extraOptions, fetchWithBaseQuery) {

        const result = { data: {} };
        // prepare api path string in form /2021-01-01..2021-01-8?from=EUR&to=USD,RUB,GBR
        // see https://www.frankfurter.app/docs/
        const startDateString = dayjs(currentDate).subtract(PERIOD_IN_DAYS, 'day').format(API_DAY_FORMAT);
        const queryDateRange = `${startDateString}..${dayjs(currentDate).format(API_DAY_FORMAT)}`;
        const currencies = Object.values(Currency);
        const currenciesString = currencies.join(',');

        const requests = currencies.map((currency) => fetchWithBaseQuery(
          `${queryDateRange}?from=${currency}&to=${currenciesString}`));

        const responses = await Promise.all(requests);

        responses.forEach((response) => {
          if (response.error) {
            throw response.error;
          }

          const transformedData = {
            [response.data.base]: response.data.rates,
          };

          result.data = { ...result.data, ...transformedData };
        });

        return result;
      },
    }),
  }),
});

export const { useFetchCurrenciesDataQuery } = api;


const selectFetchCurrenciesDataResult = api.endpoints.fetchCurrenciesData.select();

const selectAllCurrenciesData = createSelector(
  selectFetchCurrenciesDataResult,
  (currenciesDataResult) => {
    // eslint-disable-next-line no-console
    console.log(currenciesDataResult);
    return currenciesDataResult?.data ?? {};
  },
);

export const selectCurrencyRate = createSelector(
  selectAllCurrenciesData,
  (_, currencyFrom) => currencyFrom,
  (_, currencyTo) => currencyTo,
  (_, date) => date,
  (currenciesData, currencyFrom, currencyTo, date) => (
    // eslint-disable-next-line no-console
    // console.log(currenciesData);
    currenciesData?.[currencyFrom]?.[date]?.[currencyTo] ?? null
  ),
);

