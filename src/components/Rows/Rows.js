// @flow

import React from 'react';
import { Row } from '../Row/Row';
import './c-rows.scss';
import { transactionStore } from '../../store/transactionStore';

type Props = {
  data: BillsType[]
};

export const Rows = ({ data }: Props) => {
  let items = <h3 className="c-rows__missing">No items</h3>;

  if (data && data.length) {
    const lineItem = data.map(item => {
      const { id } = item;

      return (
        <li className="c-rows__item" key={id}>
          <Row data={item} store={transactionStore} />
        </li>
      );
    });

    items = <ul className="c-rows__list">{lineItem}</ul>;
  }

  return <article className="c-rows">{items}</article>;
};
