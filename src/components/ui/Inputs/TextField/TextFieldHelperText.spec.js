import React from 'react';
import { mount } from 'enzyme';
import TextFieldHelperText from './TextFieldHelperText';

describe('TextFieldHelperText Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <TextFieldHelperText>
        Test
      </TextFieldHelperText>
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('Check Props', () => {
    expect(wrapper.props().children).toHaveLength(4);
  });
});
