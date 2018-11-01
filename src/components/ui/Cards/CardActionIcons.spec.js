import React from 'react';
import { mount } from 'enzyme';
import CardActionIcons from './CardActionIcons';

describe('CardActionIcons Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <CardActionIcons>
        Test
      </CardActionIcons>
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('Check Props', () => {
    expect(wrapper.props().children).toHaveLength(4);
  });
});
