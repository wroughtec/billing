// @flow
import { billsUrl, transactionsUrl } from './urls';

const bills = {
    id: 0,
    name: 'Bills',
    url: billsUrl,
    data: 'bills'
  },
  transactions = {
    id: 1,
    name: 'Transactions',
    url: transactionsUrl,
    data: 'transactions'
  };

export const tabs = [bills, transactions];
