import React from 'react';
import { mount } from 'enzyme';
import ChipIconTrailing from './ChipIconTrailing';
import { DONE } from '../../../constants';

describe('ChipIconTrailing Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ChipIconTrailing />
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('Check Props', () => {
    wrapper.setProps({
      font: DONE
    });

    expect(wrapper.props().font).toEqual(DONE);
  });

  it('Simulate Click Event', () => {
    let value = false;

    wrapper.setProps({
      icon: DONE,
      onClick: () => {
        value = true;
      }
    });

    wrapper.find({ role: 'button' }).simulate('click');

    expect(value).toBe(true);
  });
});
