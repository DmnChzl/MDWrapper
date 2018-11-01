import React from 'react';
import { mount } from 'enzyme';
import GridCell from './GridCell';
import { TOP } from '../../../constants';

describe('GridCell Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <GridCell>
        Test
      </GridCell>
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('Check Props', () => {
    wrapper.setProps({
      col: 6,
      style: { padding: 10 },
      vAlign: TOP
    });

    expect(wrapper.props().children).toHaveLength(4);
    expect(wrapper.props().col).toEqual(6);
    expect(wrapper.props().style).toBeDefined();
    expect(wrapper.props().vAlign).toEqual(TOP);
  });
});
