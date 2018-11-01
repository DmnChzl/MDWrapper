import React from 'react';
import { mount } from 'enzyme';
import Button from './Button';

describe('Button Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Button>
        Test
      </Button>
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('Check Props', () => {
    wrapper.setProps({
      disabled: true,
      raised: true
    });

    expect(wrapper.props().classes).toHaveLength(0);
    expect(wrapper.props().children).toHaveLength(4);
    expect(wrapper.props().dense).toBe(false);
    expect(wrapper.props().disabled).toBe(true);
    expect(wrapper.props().outlined).toBe(false);
    expect(wrapper.props().raised).toBe(true);
    expect(wrapper.props().unelevated).toBe(false);
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
