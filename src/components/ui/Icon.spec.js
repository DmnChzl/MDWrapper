import React from 'react';
import { mount } from 'enzyme';
import Icon from './Icon';
import { STAR } from '../../constants';

describe('Icon Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Icon />
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
    expect(wrapper.props().classes).toHaveLength(0);
  });
});
