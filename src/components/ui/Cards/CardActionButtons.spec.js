import React from 'react';
import { mount } from 'enzyme';
import CardActionButtons from './CardActionButtons';

describe('CardActionButtons Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <CardActionButtons>
        Test
      </CardActionButtons>
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
