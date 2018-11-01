import React from 'react';
import { mount } from 'enzyme';
import Slider from './Slider';

describe('Slider Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Slider />
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('Check Props', () => {
    wrapper.setProps({
      discrete: true,
      displayMarkers: true,
      max: 42,
      min: 24
    });

    expect(wrapper.props().disabled).toBe(false);
    expect(wrapper.props().discrete).toBe(true);
    expect(wrapper.props().displayMarkers).toBe(true);
    expect(wrapper.props().max).toEqual(42);
    expect(wrapper.props().min).toEqual(24);
    expect(wrapper.props().step).toEqual(1);
    expect(wrapper.props().value).toBeUndefined();
    expect(wrapper.find({ role: 'slider' }).prop('aria-valuenow')).toEqual(
      `${(wrapper.props().min + wrapper.props().max) / 2}`
    );
  });

  it('Test Internal Method', () => {
    let value = 0;

    wrapper.setProps({
      onChange: val => {
        value = val;
      },
      value: 50
    });

    wrapper.instance().handleChange();

    expect(value).toEqual(50);
  });
});
