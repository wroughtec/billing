import React from 'react';
import { shallow } from 'enzyme';
import { Tab } from '../Tab';

describe('Tab', () => {
  test('Renders', () => {
    const component = shallow(<Tab name="name" url="url" />);

    expect(component).toMatchSnapshot();
  });
});
