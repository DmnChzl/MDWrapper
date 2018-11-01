import React from 'react';
import { mount } from 'enzyme';
import LinearProgress from './LinearProgress';

describe('LinearProgress Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <LinearProgress />
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('Check Props', () => {
    wrapper.setProps({
      buffered: true,
      value: 50
    });

    expect(wrapper.props().buffered).toBe(true);
    expect(wrapper.props().indeterminate).toBe(false);
    expect(wrapper.props().reversed).toBe(false);
    expect(wrapper.props().value).toEqual(50);
  });
});
