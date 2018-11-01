import React from 'react';
import { mount } from 'enzyme';
import FloatingLabel from './FloatingLabel';

describe('FloatingLabel Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <FloatingLabel>
        Test
      </FloatingLabel>
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
