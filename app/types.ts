import {ReactNode} from 'react';

export type MainNavParamList = {
  HistoryTab: undefined;
  ExchangeTab: undefined;
  XTab: undefined;
  SettingsTab: undefined;
  WalletTab: undefined;
};

export interface CurrencyOption {
  label: string;
  value: string;
}
