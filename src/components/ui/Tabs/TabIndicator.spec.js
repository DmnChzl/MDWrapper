import React from 'react';
import { mount } from 'enzyme';
import TabIndicator from './TabIndicator';

describe('TabIndicator Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <TabIndicator />
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('Check Props', () => {
    wrapper.setProps({
      active: true
    });

    expect(wrapper.props().active).toBe(true);
    expect(wrapper.props().underline).toBe(false);
  });
});
