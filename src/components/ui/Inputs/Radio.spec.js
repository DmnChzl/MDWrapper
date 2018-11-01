import React from 'react';
import { mount } from 'enzyme';
import Radio from './Radio';

describe('Radio Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Radio />
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('Check Props', () => {
    wrapper.setProps({
      label: 'Test',
      disabled: true
    });

    expect(wrapper.props().checked).toBe(false);
    expect(wrapper.props().disabled).toBe(true);
    expect(wrapper.props().label).toHaveLength(4);
    expect(wrapper.props().name).toEqual('default');
  });

  it('Simulate Change Event', () => {
    let value = false;

    wrapper.setProps({
      onChange: event => {
        value = event.target.checked
      }
    });

    wrapper.find('input').simulate('change', {
      target: { checked: true }
    });

    expect(value).toBe(true);
  });
});
