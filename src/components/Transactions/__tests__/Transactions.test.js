import React from 'react';
import { shallow } from 'enzyme';
import { Transactions } from '../Transactions';
import db from '../../../__mocks__/db.json';

describe('Transactions', () => {
  test('Renders', () => {
    const component = shallow(<Transactions data={db.bills[0].transactions} />);

    expect(component).toMatchSnapshot();
  });
});
