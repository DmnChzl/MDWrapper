import React from 'react';
import { mount } from 'enzyme';
import TextField from './TextField';
import { DONE } from '../../../../constants';

describe('TextField Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <TextField />
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  describe('Check Props', () => {
    it('Return Default', () => {
      wrapper.setProps({
        fullWidth: true,
        helper: 'Need Help ?',
        icon: DONE,
        label: 'Done',
        trailing: true
      });
  
      expect(wrapper.props().fullWidth).toBe(true);
      expect(wrapper.props().disabled).toBe(false);
      expect(wrapper.props().helper).toBeDefined();
      expect(wrapper.props().icon).toEqual(DONE);
      expect(wrapper.props().label).toHaveLength(4);
      expect(wrapper.props().placeholder).toBeFalsy();
      expect(wrapper.props().trailing).toBe(true);
    });
  
    it('Return Outlined', () => {
      wrapper.setProps({
        label: 'Done',
        outlined: true
      });
  
      expect(wrapper.props().label).toHaveLength(4);
      expect(wrapper.props().outlined).toBe(true);
    });
  });

  it('Simulate Change Event', () => {
    let value = '';

    wrapper.setProps({
      onChange: event => {
        value = event.target.value
      }
    });

    wrapper.find('input').simulate('change', {
      target: {
        value: 'Test'
      }
    });

    expect(value).toHaveLength(4);
  });
});
