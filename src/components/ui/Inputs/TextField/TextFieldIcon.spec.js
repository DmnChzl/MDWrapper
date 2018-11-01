import React from 'react';
import { mount } from 'enzyme';
import TextFieldIcon from './TextFieldIcon';
import { DONE } from '../../../../constants';

describe('TextFieldIcon Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <TextFieldIcon />
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
