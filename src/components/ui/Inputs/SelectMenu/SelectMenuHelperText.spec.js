import React from 'react';
import { mount } from 'enzyme';
import SelectMenuHelperText from './SelectMenuHelperText';

describe('SelectMenuHelperText Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <SelectMenuHelperText>
        Test
      </SelectMenuHelperText>
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
