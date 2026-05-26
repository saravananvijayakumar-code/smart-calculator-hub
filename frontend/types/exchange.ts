// Types for Exchange service
export interface CurrencyInfo {
  code: string;
  name: string;
  symbol: string;
}

export interface ExchangeRate {
  from: string;
  to: string;
  rate: number;
  lastUpdated: Date;
}

export interface ConvertResponse {
  from: string;
  to: string;
  amount: number;
  convertedAmount: number;
  rate: number;
  lastUpdated: Date;
}

export interface GetRatesResponse {
  base: string;
  rates: Record<string, number>;
  lastUpdated: Date;
}
