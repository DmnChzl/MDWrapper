import React from 'react';
import { mount } from 'enzyme';
import CardActions from './CardActions';

describe('CardActions Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <CardActions>
        Test
      </CardActions>
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
