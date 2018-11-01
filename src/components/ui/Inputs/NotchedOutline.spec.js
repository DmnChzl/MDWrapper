import React from 'react';
import { mount } from 'enzyme';
import NotchedOutline from './NotchedOutline';

describe('NotchedOutline Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <NotchedOutline />
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });
});
