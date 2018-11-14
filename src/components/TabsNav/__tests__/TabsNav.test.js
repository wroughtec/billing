import React from 'react';
import { shallow } from 'enzyme';
import { TabsNav } from '../TabsNav';

describe('TabsNav', () => {
  test('Renders', () => {
    const component = shallow(<TabsNav />);

    expect(component).toMatchSnapshot();
  });
});
