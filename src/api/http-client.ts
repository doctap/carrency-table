import type { AppDispatch } from '../redux/store/store';
import { CurrencySlice } from '../redux/reducers/CurrencySlice';
import { getConvertedDataCurrency } from '../helpers';

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL ?? 'https://api.coingecko.com/';

export const getCurrencies = (currentPage: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(CurrencySlice.actions.stocksFetching());
    const res = await fetch(
      `${REACT_APP_BASE_URL}api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=${currentPage}`
    );
    const body = await res.json();
    const actualData = getConvertedDataCurrency(body);
    dispatch(CurrencySlice.actions.stocksFetchingSuccess(actualData));
  } catch (e: any) {
    dispatch(CurrencySlice.actions.stocksFetchingError(e.message));
  }
};
