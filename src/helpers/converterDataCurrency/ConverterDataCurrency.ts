import type { ICurrency, IResponseCurrency } from '../../api';

export const getConvertedDataCurrency = (
  data: IResponseCurrency[]
): ICurrency[] =>
  data.map(c => ({
    id: c.id,
    symbol: c.symbol,
    name: c.name
  }));
