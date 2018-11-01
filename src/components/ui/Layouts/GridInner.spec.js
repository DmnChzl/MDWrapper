import React from 'react';
import { mount } from 'enzyme';
import GridInner from './GridInner';

describe('GridInner Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <GridInner>
        Test
      </GridInner>
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('Check Props', () => {
    wrapper.setProps({
      style: { margin: 10 }
    });

    expect(wrapper.props().children).toHaveLength(4);
    expect(wrapper.props().style).toBeDefined();
  });
});
