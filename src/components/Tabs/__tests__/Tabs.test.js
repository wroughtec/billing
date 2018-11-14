import React from 'react';
import { shallow } from 'enzyme';
import { Tabs } from '../Tabs';
import db from '../../../__mocks__/db.json';

describe('Tabs', () => {
  let store;
  beforeEach(() => {
    store = {
      bills: db.bills.filter(item => item.isBill),
      transactions: db.bills.filter(item => !item.isBill),
      categories: db.categories,
      fetchTransactions: jest.fn()
    };
  });
  test('Renders spinner', () => {
    const component = shallow(<Tabs store={store} />);

    expect(component).toMatchSnapshot();
  });

  test('Renders done', () => {
    store.state = 'done';
    const component = shallow(<Tabs store={store} />);

    expect(component).toMatchSnapshot();
  });
});
