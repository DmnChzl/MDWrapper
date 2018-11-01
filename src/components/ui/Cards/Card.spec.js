import React from 'react';
import { mount } from 'enzyme';
import Card from './Card';

describe('Card Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Card>
        Test
      </Card>
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
