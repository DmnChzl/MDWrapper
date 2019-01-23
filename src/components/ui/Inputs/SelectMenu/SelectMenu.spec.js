import React from 'react';
import { mount } from 'enzyme';
import SelectMenu from './SelectMenu';
import { DONE } from '../../../../constants';

describe('SelectMenu Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <SelectMenu />
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  describe('Check Props', () => {
    it('Return Default', () => {
      wrapper.setProps({
        data: [
          'Hello',
          'World'
        ],
        helper: 'Need Help ?',
        icon: DONE,
        label: 'Test'
      });
  
      expect(wrapper.props().data).toHaveLength(2);
      expect(wrapper.props().disabled).toBe(false);
      expect(wrapper.props().helper).toBeDefined();
      expect(wrapper.props().icon).toEqual(DONE);
      expect(wrapper.props().label).toHaveLength(4);
      expect(wrapper.props().outlined).toBe(false);
    });

    it('Return Outlined', () => {
      wrapper.setProps({
        label: 'Test',
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

    wrapper.find('select').simulate('change', {
      target: {
        value: 'Test'
      }
    });

    expect(value).toHaveLength(4);
  });
});
