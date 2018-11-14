import React from 'react';
import { shallow, mount } from 'enzyme';
import { Row } from '../Row';
import db from '../../../__mocks__/db.json';

describe('Row', () => {
  let store;

  beforeEach(() => {
    store = {
      categories: db.categories,
      updateBill: jest.fn()
    };
  });

  const generateProps = (isBill = false) => {
    const bill = db.bills[0];
    bill.isBill = isBill;

    return bill;
  };

  test('Renders as a bill', () => {
    const data = generateProps(true);
    const component = shallow(<Row data={data} store={store} />);

    expect(component).toMatchSnapshot();
  });

  test('Renders as a transaction', () => {
    const data = generateProps();
    const component = shallow(<Row data={data} store={store} />);

    expect(component).toMatchSnapshot();
  });

  test('update event is fired', () => {
    const data = generateProps();
    const component = shallow(<Row data={data} store={store} />);
    component.find('button').simulate('click', { stopPropagation: () => undefined });

    expect(store.updateBill).toBeCalled();
  });

  test('open transaction event is fired', () => {
    const data = generateProps();
    const component = mount(<Row data={data} store={store} />);
    expect(component.find('.c-transactions').length).toBe(0);

    component.find('.c-row__item').simulate('click');

    expect(component.find('.c-transactions').length).toBe(1);
  });
});
