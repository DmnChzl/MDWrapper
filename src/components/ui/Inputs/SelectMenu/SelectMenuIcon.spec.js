import React from 'react';
import { mount } from 'enzyme';
import SelectMenuIcon from './SelectMenuIcon';
import { DONE } from '../../../../constants';

describe('SelectMenuIcon Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <SelectMenuIcon />
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Check Props', () => {
    wrapper.setProps({
      font: DONE
    });
    
    expect(wrapper.props().font).toEqual(DONE);
  });
});
