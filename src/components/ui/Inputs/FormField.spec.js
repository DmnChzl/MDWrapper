import React from 'react';
import { mount } from 'enzyme';
import FormField from './FormField';

describe('FormField Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <FormField>
        Test
      </FormField>
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
