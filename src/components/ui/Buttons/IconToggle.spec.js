import React from 'react';
import { mount } from 'enzyme';
import IconToggle from './IconToggle';
import { DONE, DONE_OUTLINE } from '../../../constants';

describe('IconToggle Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <IconToggle />
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('Check Props', () => {
    wrapper.setProps({
      disabled: true,
      fontOff: DONE_OUTLINE,
      fontOn: DONE,
      labelOff: 'ToDo',
      labelOn: 'Done'
    });

    expect(wrapper.props().disabled).toBe(true);
    expect(wrapper.props().fontOff).toEqual(DONE_OUTLINE);
    expect(wrapper.props().fontOn).toEqual(DONE);
    expect(wrapper.props().labelOff).toHaveLength(4);
    expect(wrapper.props().labelOn).toHaveLength(4);
  });

  it('Simulate Click Event', () => {
    let value = false;

    wrapper.setProps({
      onClick: () => {
        value = true;
      }
    });

    wrapper.find({ role: 'button' }).simulate('click');

    expect(value).toBe(true);
  });
});
