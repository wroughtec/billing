import React from 'react';
import { shallow } from 'enzyme';
import { Rows } from '../Rows';
import db from '../../../__mocks__/db.json';

describe('Rows', () => {
  test('Renders', () => {
    const data = db.bills.filter(item => item.isBill);
    const component = shallow(<Rows data={data} />);

    expect(component).toMatchSnapshot();
  });

  test('Renders no items', () => {
    const component = shallow(<Rows data={[]} />);

    expect(component).toMatchSnapshot();
  });
});
