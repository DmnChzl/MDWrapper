import React from 'react';
import { mount } from 'enzyme';
import IconButton from './IconButton';
import { DONE } from '../../../constants';

describe('IconButton Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <IconButton />
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('Check Props', () => {
    wrapper.setProps({
      disabled: true,
      font: DONE
    });

    expect(wrapper.props().classes).toHaveLength(0);
    expect(wrapper.props().disabled).toBe(true);
    expect(wrapper.props().font).toEqual(DONE);
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
