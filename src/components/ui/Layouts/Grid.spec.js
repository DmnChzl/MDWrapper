import React from 'react';
import { mount } from 'enzyme';
import Grid from './Grid';
import { LEFT } from '../../../constants';

describe('Grid Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Grid>
        Test
      </Grid>
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('Check Props', () => {
    wrapper.setProps({
      hAlign: LEFT,
      style: { margin: 10 }
    });

    expect(wrapper.props().children).toHaveLength(4);
    expect(wrapper.props().hAlign).toEqual(LEFT);
    expect(wrapper.props().style).toBeDefined();
  });
});
