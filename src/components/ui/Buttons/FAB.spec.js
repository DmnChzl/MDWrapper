import React from 'react';
import { mount } from 'enzyme';
import FAB from './FAB';

describe('FAB Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <FAB>
        Test
      </FAB>
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('Check Props', () => {
    wrapper.setProps({
      label: 'Test'
    });

    expect(wrapper.props().children).toHaveLength(4);
    expect(wrapper.props().label).toHaveLength(4);
    expect(wrapper.props().mini).toBe(false);
  });

  it('Simulate Click Event', () => {
    let value = false;

    wrapper.setProps({
      onClick: () => {
        value = true;
      }
    });

    wrapper.find('button').simulate('click');

    expect(value).toBe(true);
  });
});
