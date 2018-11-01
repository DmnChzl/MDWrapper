import React from 'react';
import { mount } from 'enzyme';
import TabScroller from './TabScroller';

describe('TabScroller Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <TabScroller>
        Test
      </TabScroller>
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
