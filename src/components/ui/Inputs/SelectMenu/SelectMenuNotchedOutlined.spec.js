import React from 'react';
import { mount } from 'enzyme';
import SelectMenuNotchedOutlined from './SelectMenuNotchedOutlined';

describe('SelectMenuNotchedOutlined Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <SelectMenuNotchedOutlined>
        Test
      </SelectMenuNotchedOutlined>
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
