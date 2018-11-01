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

  it('Check Props', () => {
    wrapper.setProps({
      active: true,
      label: 'Done'
    });

    expect(wrapper.props().active).toBe(true);
    expect(wrapper.props().aligned).toBe(false);
    expect(wrapper.props().children).toHaveLength(4);
    expect(wrapper.props().label).toHaveLength(4);
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
