// @flow

import React from 'react';
import Currency from 'react-currency-formatter';
import './c-transactions.scss';

type Props = {
  data: TransactionsType[]
};

export const Transactions = ({ data }: Props) => {
  let transactions = null;
  if (data && data.length) {
    const list = data.map(item => {
      const { id, date, amount } = item,
        transactionDate = new Intl.DateTimeFormat('en-GB').format(Date.parse(date));

      return (
        <li key={id} className="c-transactions__item">
          <span className="c-transactions__info">{transactionDate}</span>
          {amount && (
            <span className="c-transactions__info">
              <Currency quantity={amount} currency="GBP" />
            </span>
          )}
        </li>
      );
    });

    transactions = (
      <ul className="c-transactions">
        <li className="c-transactions__headings">
          <h4 className="c-transactions__title">Transactions</h4>
          <div className="c-transactions__column-headings">
            <span className="c-transactions__heading">Date</span>
            <span className="c-transactions__heading">Amount</span>
          </div>
        </li>
        {list}
      </ul>
    );
  }

  return transactions;
};
