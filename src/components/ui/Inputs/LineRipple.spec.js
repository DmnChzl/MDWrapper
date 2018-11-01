import React from 'react';
import { mount } from 'enzyme';
import LineRipple from './LineRipple';

describe('LineRipple Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <LineRipple />
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });
});
