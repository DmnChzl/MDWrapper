import React from 'react';
import { mount } from 'enzyme';
import SnackBar from './SnackBar';

describe('SnackBar Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <SnackBar>
        Test
      </SnackBar>
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  describe('Check Props', () => {
    it('Return Default', () => {
      wrapper.setProps({
        label: 'Done',
        open: true
      });
  
      expect(wrapper.props().children).toHaveLength(4);
      expect(wrapper.props().label).toHaveLength(4);
      expect(wrapper.props().leading).toBe(false);
      expect(wrapper.props().open).toBe(true);
      expect(wrapper.props().stacked).toBe(false);
    });

    it('Return Stacked', () => {
      wrapper.setProps({
        stacked: true
      });

      expect(wrapper.props().stacked).toBe(true);
    });
  });

  it('Simulate Click Event', () => {
    let value = false;

    wrapper.setProps({
      onClick: () => {
        value = true;
      }
    });

    wrapper.find('button').simulate('click');

    expect(value).toBe(true);
  });
});
