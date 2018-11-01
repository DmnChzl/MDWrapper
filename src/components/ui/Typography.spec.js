import React from 'react';
import { mount } from 'enzyme';
import Typography from './Typography';
import { HEADLINE } from '../../constants';

describe('Typography Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Typography>
        Test
      </Typography>
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('Check Props', () => {
    wrapper.setProps({
      element: 'h3',
      type: HEADLINE,
      size: 3
    });

    expect(wrapper.props().children).toHaveLength(4);
    expect(wrapper.props().element).toEqual('h3');
    expect(wrapper.props().type).toEqual(HEADLINE);
    expect(wrapper.props().size).toEqual(3);
  });
});
