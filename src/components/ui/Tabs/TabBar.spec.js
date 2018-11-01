import React from 'react';
import { mount } from 'enzyme';
import TabBar from './TabBar';

describe('TabBar Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <TabBar>
        Test
      </TabBar>
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
