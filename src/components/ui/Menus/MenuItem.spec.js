import React from 'react';
import { mount } from 'enzyme';
import MenuItem from './MenuItem';

describe('MenuItem Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MenuItem />
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('Check Props', () => {
    wrapper.setProps({
      label: 'Test'
    });

    expect(wrapper.props().label).toHaveLength(4);
  });

  it('Simulate Click Event', () => {
    let value = false;

    wrapper.setProps({
      label: 'Test',
      onClick: () => {
        value = true;
      }
    });

    wrapper.find('li').simulate('click');

    expect(value).toBe(true);
  });
});
