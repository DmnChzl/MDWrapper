import React from 'react';
import { mount } from 'enzyme';
import ChipSet from './ChipSet';

describe('ChipSet Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ChipSet>
        Test
      </ChipSet>
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('Check Props', () => {
    wrapper.setProps({
      choice: true
    });

    expect(wrapper.props().children).toHaveLength(4);
    expect(wrapper.props().choice).toBe(true);
  });
});
