import React from 'react';
import { mount } from 'enzyme';
import TopBarIcon from './TopBarIcon';
import { STAR } from '../../../constants';

describe('TopBarIcon Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <TopBarIcon />
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('Check Props', () => {
    wrapper.setProps({
      font: STAR
    });

    expect(wrapper.props().font).toEqual(STAR);
  });

  it('Simulate Click Event', () => {
    let value = false;

    wrapper.setProps({
      onClick: () => {
        value = true
      }
    });

    wrapper.find('button').simulate('click');

    expect(value).toBe(true);
  });
});
