import React from 'react';
import { mount } from 'enzyme';
import Tab from './Tab';
import TabIndicator from './TabIndicator';
import { DONE } from '../../../constants';

describe('Tab Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Tab>
        <TabIndicator />
      </Tab>
    );
  });

  it('Renders', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper).toMatchSnapshot();
  });

  it('Check Props', () => {
    wrapper.setProps({
      icon: DONE,
      label: 'Done',
      stacked: true
    });

    const tabIndicator = mount(wrapper.props().children);

    expect(wrapper.props().active).toBe(false);
    expect(tabIndicator.instance()).toBeInstanceOf(TabIndicator);
    expect(wrapper.props().icon).toEqual(DONE);
    expect(wrapper.props().label).toHaveLength(4);
    expect(wrapper.props().stacked).toBe(true);
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
